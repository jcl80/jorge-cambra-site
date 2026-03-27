'use client'

import { useState } from "react";

const gpuConfigs = [
  { id: "3090x1", label: "1× RTX 3090", vram: 24, bw: 936, gen: "Ampere", note: "24GB GDDR6X" },
  { id: "3090x2", label: "2× RTX 3090", vram: 48, bw: 936, gen: "Ampere", note: "48GB total, no NVLink" },
  { id: "4090x1", label: "1× RTX 4090", vram: 24, bw: 1008, gen: "Ada", note: "24GB GDDR6X" },
  { id: "4090x2", label: "2× RTX 4090", vram: 48, bw: 1008, gen: "Ada", note: "48GB total, no NVLink" },
  { id: "5090x1", label: "1× RTX 5090", vram: 32, bw: 1792, gen: "Blackwell", note: "32GB GDDR7" },
  { id: "5090x2", label: "2× RTX 5090", vram: 64, bw: 1792, gen: "Blackwell", note: "64GB total, no NVLink" },
  { id: "6000x1", label: "1× RTX Pro 6000", vram: 96, bw: 1792, gen: "Blackwell", note: "96GB GDDR7 ECC" },
  { id: "6000x2", label: "2× RTX Pro 6000", vram: 192, bw: 1792, gen: "Blackwell", note: "192GB total" },
  { id: "a100x1", label: "1× A100 80GB", vram: 80, bw: 2039, gen: "Ampere", note: "80GB HBM2e" },
];

const models = [
  {
    name: "gpt-oss-120b",
    family: "GPT-OSS",
    arch: "MoE 117B (5.1B active)",
    versions: [
      { prec: "native", label: "MXFP4 (native)", gb: 65, quality: "original" as const, note: "All OpenAI benchmarks run at this precision. This IS the model." },
    ],
  },
  {
    name: "gpt-oss-20b",
    family: "GPT-OSS",
    arch: "MoE 21B (3.6B active)",
    versions: [
      { prec: "native", label: "MXFP4 (native)", gb: 16, quality: "original" as const, note: "Native format. Rivals o3-mini." },
    ],
  },
  {
    name: "Qwen3-235B-A22B",
    family: "Qwen",
    arch: "MoE 235B (22B active)",
    versions: [
      { prec: "bf16", label: "BF16", gb: 470, quality: "original" as const, note: "Full precision original." },
      { prec: "fp8", label: "FP8", gb: 235, quality: "near-lossless" as const, note: "Official Qwen FP8. 'Nearly identical to BF16.'" },
      { prec: "int4", label: "INT4", gb: 120, quality: "lossy" as const, note: "Post-hoc quantization. Noticeable reasoning degradation." },
    ],
  },
  {
    name: "Qwen3.5-397B-A17B",
    family: "Qwen",
    arch: "MoE 397B (17B active)",
    versions: [
      { prec: "bf16", label: "BF16", gb: 794, quality: "original" as const, note: "Full precision. Multi-node only." },
      { prec: "fp8", label: "FP8", gb: 397, quality: "near-lossless" as const, note: "Official FP8. Still very large." },
      { prec: "int4", label: "INT4", gb: 100, quality: "lossy" as const, note: "Aggressive quant. Quality loss on reasoning." },
    ],
  },
  {
    name: "Qwen3.5-122B-A10B",
    family: "Qwen",
    arch: "MoE 122B (10B active)",
    versions: [
      { prec: "bf16", label: "BF16", gb: 244, quality: "original" as const, note: "Full precision original." },
      { prec: "fp8", label: "FP8", gb: 122, quality: "near-lossless" as const, note: "Official FP8." },
      { prec: "int4", label: "INT4", gb: 35, quality: "lossy" as const, note: "Post-hoc. Quality loss." },
    ],
  },
  {
    name: "Qwen3-32B",
    family: "Qwen",
    arch: "Dense 32B",
    versions: [
      { prec: "bf16", label: "BF16", gb: 64, quality: "original" as const, note: "Full precision. Thinking mode. Matches Qwen2.5-72B." },
      { prec: "fp8", label: "FP8", gb: 32, quality: "near-lossless" as const, note: "Near-lossless." },
      { prec: "int4", label: "INT4", gb: 18, quality: "lossy" as const, note: "Post-hoc quant." },
    ],
  },
  {
    name: "Qwen3.5-27B",
    family: "Qwen",
    arch: "Dense 27B (multimodal)",
    versions: [
      { prec: "bf16", label: "BF16", gb: 54, quality: "original" as const, note: "Native multimodal + vision. 256K context." },
      { prec: "fp8", label: "FP8", gb: 27, quality: "near-lossless" as const, note: "Official FP8." },
    ],
  },
  {
    name: "Qwen2.5-72B-Instruct",
    family: "Qwen",
    arch: "Dense 72B",
    versions: [
      { prec: "bf16", label: "BF16", gb: 144, quality: "original" as const, note: "Full precision original." },
      { prec: "fp8", label: "FP8", gb: 72, quality: "near-lossless" as const, note: "Near-lossless." },
      { prec: "awq", label: "AWQ (INT4)", gb: 40, quality: "lossy" as const, note: "⚠️ Your current config. Lossy quantization." },
    ],
  },
  {
    name: "Gemma 3 27B",
    family: "Gemma",
    arch: "Dense 27B",
    versions: [
      { prec: "bf16", label: "BF16", gb: 54, quality: "original" as const, note: "Full precision. 128K context. 140+ languages." },
      { prec: "fp8", label: "FP8/INT8", gb: 27, quality: "near-lossless" as const, note: "Near-lossless." },
      { prec: "qat-int4", label: "QAT INT4", gb: 14, quality: "mild-loss" as const, note: "Google's QAT. Better than post-hoc INT4, but not original." },
    ],
  },
  {
    name: "GLM-4-32B",
    family: "GLM",
    arch: "Dense 32B",
    versions: [
      { prec: "bf16", label: "BF16", gb: 64, quality: "original" as const, note: "MIT license. Reasoning + rumination variants." },
      { prec: "fp8", label: "FP8", gb: 32, quality: "near-lossless" as const, note: "Near-lossless." },
    ],
  },
  {
    name: "GLM-4.6 (355B MoE)",
    family: "GLM",
    arch: "MoE 355B (~32B active)",
    versions: [
      { prec: "bf16", label: "BF16", gb: 710, quality: "original" as const, note: "Multi-node only." },
      { prec: "fp8", label: "FP8", gb: 355, quality: "near-lossless" as const, note: "Still needs server-class." },
      { prec: "int4", label: "INT4", gb: 90, quality: "lossy" as const, note: "Aggressive quantization. Quality loss." },
    ],
  },
  {
    name: "Llama 4 Scout",
    family: "Llama",
    arch: "MoE 109B (17B active)",
    versions: [
      { prec: "bf16", label: "BF16", gb: 218, quality: "original" as const, note: "10M context. Native multimodal. Llama license." },
      { prec: "fp8", label: "FP8", gb: 110, quality: "near-lossless" as const, note: "Official Meta FP8 release." },
      { prec: "int4", label: "INT4", gb: 55, quality: "lossy" as const, note: "Fits 1×H100. Lossy." },
    ],
  },
];

type Quality = "original" | "near-lossless" | "mild-loss" | "lossy";

const qualityMeta: Record<Quality, { color: string; bg: string; border: string; label: string; icon: string }> = {
  original: { color: "#22c55e", bg: "#0a2a14", border: "#1a5a2d", label: "Original", icon: "★" },
  "near-lossless": { color: "#3b82f6", bg: "#0a1a30", border: "#1a3a6a", label: "Near-lossless", icon: "●" },
  "mild-loss": { color: "#eab308", bg: "#2a2510", border: "#5a4a20", label: "Mild loss", icon: "◐" },
  lossy: { color: "#ef4444", bg: "#2a0a0a", border: "#5a1a1a", label: "Lossy", icon: "✗" },
};

const qualityOrder: Record<Quality, number> = { original: 0, "near-lossless": 1, "mild-loss": 2, lossy: 3 };

function getFittingVersions(model: typeof models[number], vramGB: number) {
  const usable = vramGB * 0.88;
  return model.versions
    .filter((v) => v.gb <= usable)
    .sort((a, b) => (qualityOrder[a.quality] ?? 9) - (qualityOrder[b.quality] ?? 9));
}

export default function GPUModelMatrix() {
  const [selectedGPU, setSelectedGPU] = useState("6000x1");

  const gpu = gpuConfigs.find((g) => g.id === selectedGPU)!;

  const results = models
    .map((m) => {
      const versions = getFittingVersions(m, gpu.vram);
      const best = versions[0] || null;
      return { model: m, versions, best };
    })
    .sort((a, b) => {
      if (!a.best && !b.best) return 0;
      if (!a.best) return 1;
      if (!b.best) return -1;
      return (qualityOrder[a.best.quality] ?? 9) - (qualityOrder[b.best.quality] ?? 9);
    });

  const origCount = results.filter((r) => r.best?.quality === "original").length;
  const nlCount = results.filter((r) => r.best?.quality === "near-lossless").length;

  return (
    <div style={{
      fontFamily: "'IBM Plex Mono', 'JetBrains Mono', 'SF Mono', monospace",
      background: "#08090c",
      color: "#b8bcc4",
      padding: "20px",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap');
      `}</style>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        {/* Title */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "#3a4258", marginBottom: 6 }}>
            Original / Near-Lossless Only
          </div>
          <h2 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: "#e2e8f0", lineHeight: 1.3 }}>
            What Actually Runs at Full Quality?
          </h2>
          <p style={{ margin: "6px 0 0", fontSize: 11, color: "#4a5268", lineHeight: 1.6, maxWidth: 700 }}>
            Only showing original precision (the weights the model was benchmarked on) and FP8 (officially near-lossless).
            INT4/AWQ results are flagged as lossy — they may look like they &quot;fit&quot; but you&apos;re not running the real model.
          </p>
        </div>

        {/* GPU Selector */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
          {gpuConfigs.map((g) => (
            <button
              key={g.id}
              onClick={() => setSelectedGPU(g.id)}
              style={{
                background: selectedGPU === g.id ? "#141820" : "#0c0e14",
                border: `1px solid ${selectedGPU === g.id ? "#2a3a5a" : "#14181e"}`,
                color: selectedGPU === g.id ? "#e2e8f0" : "#4a5268",
                borderRadius: 6,
                padding: "8px 12px",
                cursor: "pointer",
                fontSize: 11,
                fontFamily: "inherit",
                fontWeight: selectedGPU === g.id ? 600 : 400,
                transition: "all 0.15s",
              }}
            >
              <div>{g.label}</div>
              <div style={{ fontSize: 9, opacity: 0.6, marginTop: 2 }}>{g.vram}GB · {g.bw} GB/s</div>
            </button>
          ))}
        </div>

        {/* Stats bar */}
        <div style={{
          display: "flex",
          gap: 16,
          marginBottom: 16,
          padding: "10px 14px",
          background: "#0c0e14",
          borderRadius: 8,
          border: "1px solid #14181e",
          fontSize: 11,
        }}>
          <div>
            <span style={{ color: "#22c55e", fontWeight: 600 }}>{origCount}</span>
            <span style={{ color: "#4a5268", marginLeft: 4 }}>at original precision</span>
          </div>
          <div>
            <span style={{ color: "#3b82f6", fontWeight: 600 }}>{nlCount}</span>
            <span style={{ color: "#4a5268", marginLeft: 4 }}>at FP8 (near-lossless)</span>
          </div>
          <div>
            <span style={{ color: "#4a5268" }}>
              {results.filter((r) => !r.best || r.best.quality === "lossy" || r.best.quality === "mild-loss").length} don&apos;t fit or only fit lossy
            </span>
          </div>
        </div>

        {/* Results */}
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {results.map(({ model: m, best }) => {
            const q = best ? qualityMeta[best.quality] : null;
            const isGood = best && (best.quality === "original" || best.quality === "near-lossless");
            const isMild = best?.quality === "mild-loss";

            return (
              <div
                key={m.name}
                style={{
                  display: "grid",
                  gridTemplateColumns: "200px 160px 1fr",
                  gap: 12,
                  alignItems: "start",
                  padding: "10px 14px",
                  background: isGood ? q!.bg : "#0a0b0e",
                  border: `1px solid ${isGood ? q!.border : "#12141a"}`,
                  borderRadius: 6,
                  opacity: isGood || isMild ? 1 : 0.45,
                }}
              >
                {/* Model name */}
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: isGood ? q!.color : "#5a6278" }}>
                    {m.name}
                  </div>
                  <div style={{ fontSize: 9, color: "#3a4258", marginTop: 2 }}>
                    {m.arch}
                  </div>
                </div>

                {/* Best fit */}
                <div>
                  {best && q ? (
                    <div style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "3px 8px",
                      background: q.bg,
                      border: `1px solid ${q.border}`,
                      borderRadius: 4,
                      fontSize: 10,
                    }}>
                      <span style={{ color: q.color }}>{q.icon}</span>
                      <span style={{ color: q.color, fontWeight: 600 }}>{best.label}</span>
                      <span style={{ color: "#4a5268" }}>~{best.gb}GB</span>
                    </div>
                  ) : (
                    <div style={{ fontSize: 10, color: "#2a2e38" }}>
                      Doesn&apos;t fit
                    </div>
                  )}
                </div>

                {/* Note */}
                <div style={{ fontSize: 10, color: "#4a5268", lineHeight: 1.5 }}>
                  {best ? best.note : (() => {
                    const smallest = m.versions[m.versions.length - 1];
                    return smallest ? `Needs ${smallest.gb}GB min (${smallest.label})` : "Too large";
                  })()}
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div style={{
          marginTop: 20,
          padding: "14px",
          background: "#0c0e14",
          borderRadius: 8,
          border: "1px solid #14181e",
          fontSize: 10,
          lineHeight: 2,
          color: "#3a4258",
        }}>
          <div style={{ fontWeight: 600, color: "#5a6278", marginBottom: 4 }}>Quality Tiers</div>
          {(Object.entries(qualityMeta) as [Quality, typeof qualityMeta[Quality]][]).map(([key, meta]) => (
            <div key={key}>
              <span style={{ color: meta.color }}>{meta.icon} {meta.label}</span>
              <span style={{ color: "#2a3040", marginLeft: 8 }}>
                {key === "original" && "— Running the exact weights the model was benchmarked/released at"}
                {key === "near-lossless" && "— FP8, officially provided, <1% benchmark difference"}
                {key === "mild-loss" && "— QAT INT4 (trained with quant awareness, small quality hit)"}
                {key === "lossy" && "— Post-hoc INT4/AWQ/GPTQ. Noticeable reasoning & coding degradation"}
              </span>
            </div>
          ))}
          <div style={{ marginTop: 8, color: "#2a3040" }}>
            VRAM budget uses 88% of total to leave room for KV cache + framework overhead at moderate context lengths.
            gpt-oss MXFP4 = native format (post-trained with it, all benchmarks at this precision). Not a downgrade.
          </div>
        </div>
      </div>
    </div>
  );
}
