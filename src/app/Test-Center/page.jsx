"use client";
import { DownloadIcon, XCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Page = () => {
    const [files, setFiles] = useState([]);
    const [previewFile, setPreviewFile] = useState(null); // 👈 الملف المفتوح للمعاينة
    const { t } = useTranslation();

    useEffect(() => {
        async function fetchFiles() {
            const folderId = "1QFdLgMQhAQ2ks3MXz9zw0HxW5H4riMPT";
            const apiKey = "AIzaSyDQntpPvs-Pu949gcloYg3jy6G6PHJyrI0";

            const res = await fetch(
                `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}`
            );
            const data = await res.json();
            setFiles(data.files || []);
        }

        fetchFiles();
    }, []);

    return (
        <div className="max-w-3xl mx-auto p-6 pt-20">
            <h1 className="text-3xl font-bold text-black dark:text-white mb-6 text-center">
                {t("ExamPDFs")}
            </h1>
            <div className="space-y-6">
                {files.map((file) => (
                    <div
                        key={file.id}
                        className="p-4 rounded-xl bg-white dark:bg-gray-900 shadow flex flex-col gap-3"
                    >
                        <h2 className="font-semibold text-black dark:text-white text-center text-lg">
                            {file.name}
                        </h2>

                        {/* زرار تحميل */}
                        <a
                            href={`https://drive.google.com/uc?id=${file.id}&export=download`}
                            className="inline-block bg-primary text-white font-semibold px-4 py-2 rounded-full border border-primary hover:text-primary hover:bg-transparent transition duration-300 text-center"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t("DownloadPDF")}
                            <DownloadIcon className="inline-block mx-2" />
                        </a>

                        {/* زرار معاينة */}
                        <button
                            onClick={() => setPreviewFile(file.id)}
                            className="inline-block bg-gray-800 text-white font-semibold px-4 py-2 rounded-full border border-gray-800 hover:text-gray-800 hover:bg-transparent transition duration-300 text-center"
                        >
                            {t("PreviewPDF")}
                        </button>
                    </div>
                ))}
            </div>

            {/* ✅ Modal للمعاينة */}
            {previewFile && (
                <div className="fixed inset-0 bg-black bg-opacity-90 z-[9000] flex flex-col items-center justify-start pt-10">
                    {/* زرار إغلاق */}
                    <button
                        onClick={() => setPreviewFile(null)}
                        className="mb-4 flex items-center flex-col gap-2 text-white text-2xl font-bold hover:text-red-500 transition"
                    >
                        <XCircle className="w-16 h-16" />
                        {t("Close")}
                    </button>

                    {/* المعاينة */}
                    <iframe
                        src={`https://drive.google.com/file/d/${previewFile}/preview`}
                        className="w-3/4 h-[70vh] rounded-lg border bg-gray-200"
                    ></iframe>
                </div>
            )}
        </div>
    );
};

export default Page;
