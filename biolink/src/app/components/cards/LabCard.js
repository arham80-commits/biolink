"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Pencil } from "lucide-react";
import Drawer from "@/app/components/EditModal";
import { useTranslation } from "@/app/lib/translate";
import Toast from "@/app/components/Toast";
import DetailDrawer from "../DetailDrawer";
import EditModal from "@/app/components/EditModal";

export default function LabCard({ lab: initialLab }) {
  const { t } = useTranslation();
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDetailDrawer, setOpenDetailDrawer] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });
  const [lab, setLab] = useState(initialLab);

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "" }), 3000);
  };

  const handleUpdateSuccess = (updatedLab) => {
    setLab(updatedLab);
    showToast(t('labCard.updateSuccess'));
    setOpenEditModal(false);
    setOpenDetailDrawer(true); 
  };

  return (
    <>
      {toast.show && <Toast message={toast.message} type={toast.type} />}

      <div className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg overflow-hidden transition-shadow p-2 flex flex-col h-full relative" style={{ boxShadow: '0px 1px 1px 1px rgba(0, 0, 0, 0.15)' }}>
        <div className="relative h-40 w-full mb-4 rounded-md overflow-hidden" onClick={() => setOpenDetailDrawer(true)}
        >
          {/* <Link href={`/labs/${lab.id}`} className="block h-full w-full"> */}
            <Image
              src={lab.imageUrl || "/image.png"}
              alt={lab.name || "Lab Image"}
              fill
              className="object-cover cursor-pointer"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          {/* </Link> */}

          {/* <button
            onClick={() => setOpenDrawer(true)}
            className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:bg-gray-200 transition z-10"
            aria-label={t('labCard.editButton')}
          >
            <Pencil className="h-4 w-4 text-gray-700 cursor-pointer" />
          </button> */}
        </div>

        <div className="flex flex-col justify-between flex-grow">
          <h3 className="text-[15.42px] font-bold mb-2 truncate">{lab.name}</h3>

          <div className="mb-2">
            <p className="text-[11px] font-medium text-[#56575B] dark:text-white mb-1">
              {t('labCard.region')}
            </p>
            <span
              className={`px-2 py-1 text-[12px] font-medium rounded-full ${
                lab.notes
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {lab.notes || t('labCard.noRegion')}
            </span>
          </div>

          <div className="mb-2">
            <p className="text-[11px] font-medium text-[#56575B] dark:text-white mb-1">
              {t('labCard.labos')}
            </p>
            <div className="flex flex-wrap gap-2">
              {lab.labos && lab.labos.length > 0 ? (
                lab.labos.map((item, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-[12px] font-medium rounded-full bg-green-100 text-green-800"
                  >
                    {item}
                  </span>
                ))
              ) : (
                <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">
                  {t('labCard.noLabos')}
                </span>
              )}
            </div>
          </div>

          <div className="mb-2">
            <p className="text-[11px] font-medium text-[#56575B] dark:text-white mb-1">
              {t('labCard.structure')}
            </p>
            <div className="flex flex-wrap gap-2">
              {lab.lab_de_structure && lab.lab_de_structure.length > 0 ? (
                lab.lab_de_structure.map((item, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-[12px] font-medium rounded-full bg-green-100 text-green-800"
                  >
                    {item}
                  </span>
                ))
              ) : (
                <span className="px-2 py-1 text-[12px] font-medium rounded-full bg-red-100 text-red-800">
                  {t('labCard.noStructure')}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <DetailDrawer 
        isOpen={openDetailDrawer} 
        onClose={() => setOpenDetailDrawer(false)} 
        lab={lab}
        onEditClick={() => {
          setOpenDetailDrawer(false);
          setOpenEditModal(true);
        }}
      />

<EditModal 
        isOpen={openEditModal} 
        onClose={() => {
          setOpenEditModal(false);
          setOpenDetailDrawer(true);
        }} 
        lab={lab}
        onUpdateSuccess={handleUpdateSuccess}
      />
    </>
  );
}