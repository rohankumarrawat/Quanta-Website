import { X, Download, FileText } from "lucide-react";

export function InstallModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    const versions = [
        {
            version: "v2.7",
            label: "Latest",
            fileSize: "45.2 MB",
            releaseDate: "March 1, 2026",
        },
        {
            version: "v2.6",
            label: null,
            fileSize: "44.8 MB",
            releaseDate: "February 15, 2026",
        },
        {
            version: "v2.5",
            label: null,
            fileSize: "43.5 MB",
            releaseDate: "January 28, 2026",
        },
    ];

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg z-50">
                <div className="bg-card border border-border rounded-2xl shadow-2xl">
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-border">
                        <h2 className="text-2xl font-semibold">Download Quanta</h2>
                        <button
                            onClick={onClose}
                            className="w-8 h-8 rounded-lg hover:bg-muted flex items-center justify-center transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Version Cards */}
                    <div className="p-6 space-y-4">
                        {versions.map((version) => (
                            <div
                                key={version.version}
                                className="bg-background border border-border rounded-xl p-4 hover:border-[#22d3ee]/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <h3 className="text-lg font-semibold">{version.version}</h3>
                                        {version.label && (
                                            <span className="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#22d3ee]/20 to-[#a855f7]/20 text-[#22d3ee] text-xs font-medium border border-[#22d3ee]/30">
                                                {version.label}
                                            </span>
                                        )}
                                    </div>
                                    <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#22d3ee] to-[#a855f7] text-background text-sm font-medium hover:shadow-lg hover:shadow-[#22d3ee]/25 transition-all hover:scale-105 flex items-center gap-2">
                                        <Download className="w-4 h-4" />
                                        Download
                                    </button>
                                </div>

                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-4 text-muted-foreground">
                                        <span>{version.fileSize}</span>
                                        <span>•</span>
                                        <span>{version.releaseDate}</span>
                                    </div>
                                    <button className="flex items-center gap-1.5 text-[#22d3ee] hover:underline">
                                        <FileText className="w-4 h-4" />
                                        Release Notes
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
