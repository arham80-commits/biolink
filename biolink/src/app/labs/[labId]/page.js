import { fetchLabById } from "../../../lib/airtable";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default async function LabDetailPage({ params }) {
  const lab = await fetchLabById(params.labId);
  return (
    <>
      <div className="container mx-auto py-4 px-4">
        <div className="bg-white rounded-lg  p-4">
          {/* Full-width Image as banner */}
          {lab.imageUrl && (
            <div className="mb-6">
              <Image
                src={lab.imageUrl}
                alt={lab.name}
                width={1600}
                height={700}
                className="object-cover w-full md:h-[400px] h-[200px]"
              />
            </div>
          )}
          <h1 className="md:text-3xl text-lg font-bold mb-4">{lab.name}</h1>

          {/* Dummy description */}
          <p className="md:text-lg text-md text-gray-700 mb-4">
            This is a dummy description for the lab space. You can add more
            details here.
          </p>

          {/* Input and Button */}
          <div className="flex gap-4 mb-6">
  <div className="flex-1">
    <input
      type="text"
      placeholder="Enter your request"
      className="w-full px-4 py-2 bg-[#F1F1F1] "
    />
  </div>
  <div className="flex items-center">
    <button className="bg-[#F1F1F1] text-black py-2 px-4  flex items-center justify-center">
      <ArrowRight className="mr-2 h-5 w-5" />
      Alter
    </button>
  </div>
</div>


          {/* Labos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {/* Type de structure */}
            <div>
              <h2 className="md:text-xl text-lg font-semibold text-[#696A78]">
                Type de structure
              </h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {lab.lab_de_structure.map((item, idx) => (
                  <div
                    key={idx}
                    className="border-2 border-[#D1E2FF] px-2 py-1 mb-2"
                  >
                    <span className="text-sm text-black">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Type de laboratoire */}
            <div>
              <h2 className="md:text-xl text-lg font-semibold text-[#696A78]">
                Type de laboratoire à la location
              </h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {lab.labos.map((item, idx) => (
                  <div
                    key={idx}
                    className="border-2 border-[#F4C9C2] px-2 py-1 mb-2"
                  >
                    <span className="text-sm text-black">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Comment candidater */}
            <div>
              <h2 className="md:text-xl text-lg font-semibold text-[#696A78]">
                Comment candidater
              </h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {lab.lab_de_structure.map((item, idx) => (
                  <div
                    key={idx}
                    className="border-2 border-[#F1F1F1] px-2 py-1 mb-2"
                  >
                    <span className="text-sm text-black">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Type d’offre */}
            <div>
              <h2 className="text-xl font-semibold text-[#696A78]">
                Type d’offre
              </h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {lab.lab_de_structure.map((item, idx) => (
                  <div
                    key={idx}
                    className="border-2 border-[#F1F1F1] px-2 py-1 mb-2"
                  >
                    <span className="text-sm text-black">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* line */}
          </div>
        </div>
        <hr className="border border-gray-200 " />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          {/* Column 1: Surface info */}
          <div className="space-y-4">
            <div>
              <div className="flex gap-1 mb-1">
                <h2 className="text-sm font-semibold text-[#696A78]">
                  Surface Totale :
                </h2>
                <span className="text-sm text-[#696A78]">
                  {lab.surface_totale} m²
                </span>
              </div>
            </div>
            <div>
              <div className="flex gap-1 mb-1">
                <h2 className="text-sm font-semibold text-[#696A78]">
                  Surface min de location :
                </h2>
                <span className="text-sm text-[#696A78]">
                  {lab.surface_min_totale} m²
                </span>
              </div>
            </div>
            <div>
              <div className="flex gap-1 mb-1">
                <h2 className="text-sm font-semibold text-[#696A78]">
                  Surface max de location :
                </h2>
                <span className="text-sm text-[#696A78]">
                  {lab.surface_max_totale} m²
                </span>
              </div>
            </div>
            <div>
              <div className="flex gap-1 mb-1">
                <h2 className="text-sm font-semibold text-[#696A78]">
                  Durée max de location :
                </h2>
                <span className="text-sm text-[#696A78]">
                  {lab.duree_max_totale} mois
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Services Communs Techniques */}
          <div>
            <h2 className="text-lg font-semibold mb-2 text-[#696A78]">
              Services Communs Techniques
            </h2>
            <ul className="list-none space-y-4 flex flex-col">
              {lab.services_communs_techniques.map((item, idx) => (
                <li
                  key={idx}
                  className="text-sm text-[#696A78] bg-[rgba(241,241,241,0.4)] rounded-full px-3 py-1 w-fit"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Communs Facility Management */}
          <div>
            <h2 className="text-lg font-semibold mb-2 text-[#696A78]">
              Services Communs Facility Management
            </h2>
            <ul className="flex flex-wrap gap-4">
              {lab.services_communs_facility.map((item, idx) => (
                <li
                  key={idx}
                  className="inline-block text-sm text-[#696A78] bg-[rgba(241,241,241,0.4)] rounded-full px-3 py-1"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
