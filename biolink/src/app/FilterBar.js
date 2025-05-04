'use client';

import { useState, useEffect } from 'react';
import { fetchLabSpaces } from '@/app/lib/airtable';
import { useTranslation } from '@/app/lib/translate';
import { MapPin, Microscope, Building2, ChevronDown } from 'lucide-react'; 

export default function FilterBar({ onFiltersChange }) {
  const { t } = useTranslation();
  const [regions, setRegions] = useState([]);
  const [labos, setLabos] = useState([]);
  const [structures, setStructures] = useState([]);

  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedLabo, setSelectedLabo] = useState('');
  const [selectedStructure, setSelectedStructure] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const labs = await fetchLabSpaces();

        // Extract unique values
        const allRegions = [...new Set(labs.map(lab => lab.notes).filter(Boolean))];
        const allLabos = [...new Set(labs.flatMap(lab => lab.labos).filter(Boolean))];
        const allStructures = [...new Set(labs.flatMap(lab => lab.lab_de_structure).filter(Boolean))];

        setRegions(allRegions);
        setLabos(allLabos);
        setStructures(allStructures);
      } catch (err) {
        console.error(t('filterBar.fetchError'), err);
      }
    };
    fetchData();
  }, [t]);

  const handleChange = () => {
    onFiltersChange({
      region: selectedRegion,
      labo: selectedLabo,
      structure: selectedStructure,
    });
  };

  useEffect(() => {
    onFiltersChange({
      region: selectedRegion,
      labo: selectedLabo,
      structure: selectedStructure,
    });
  }, [selectedRegion, selectedLabo, selectedStructure, onFiltersChange]);
  

  return (
    <div className="flex flex-wrap gap-4 md:px-12 px-4 py-4">
  {/* Region Dropdown */}
  <div className="relative w-32">
  <MapPin className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
  <select
    value={selectedRegion}
    onChange={(e) => setSelectedRegion(e.target.value)}
    className="pl-9 pr-10 border border-[#E3E3E3] py-2 bg-[#F1F1F1] outline-none appearance-none w-full "
    aria-label={t('filterBar.regions')}
  >
    <option value="">{t('filterBar.regions')}</option>
    {regions.map((region, i) => (
      <option key={i} value={region}>{region}</option>
    ))}
  </select>
  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4 pointer-events-none" />
</div>

  {/* Labos Dropdown */}
  <div className="relative w-32">
  <Microscope className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
  <select
    value={selectedLabo}
    onChange={(e) => setSelectedLabo(e.target.value)}
    className="pl-9 pr-10 border border-[#E3E3E3] py-2 bg-[#F1F1F1] outline-none appearance-none w-full "
    aria-label={t('filterBar.labos')}
  >
    <option value="">{t('filterBar.labos')}</option>
    {labos.map((labo, i) => (
      <option key={i} value={labo}>{labo}</option>
    ))}
  </select>
  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4 pointer-events-none" />
</div>


  {/* Structure Dropdown */}
  <div className="relative w-48">
  <Building2 className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
  <select
    value={selectedStructure}
    onChange={(e) => setSelectedStructure(e.target.value)}
    className="pl-9 pr-10 border border-[#E3E3E3] py-2 bg-[#F1F1F1] outline-none appearance-none w-full "
    aria-label={t('filterBar.structures')}
  >
    <option value="">{t('filterBar.structures')}</option>
    {structures.map((structure, i) => (
      <option key={i} value={structure}>{structure}</option>
    ))}
  </select>
  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4 pointer-events-none" />
</div>

</div>
  );
}