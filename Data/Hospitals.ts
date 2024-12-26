export interface Hospitals {
  id: number;
  name: string;
  address: string;
  directions: string;
  features: string[];
  contactNumber: string;
  email: string;
  openingHours: string;
  website: string;
  imageUrl: string;
}

export const Hospitals: Hospitals[] = [
  {
    id: 1,
    name: "Hospital Particular do Algarve - Faro",
    address: "Urbanização Horta das Figuras, Lote 1, 8000-514 Faro",
    directions:
      "Located in eastern Faro, near the Forum Algarve shopping center",
    features: ["Emergency Room", "Surgery", "Maternity Ward", "Specialists"],
    contactNumber: "+351 289 892 040",
    email: "info.faro@grupohpa.com",
    openingHours: "24/7",
    website: "https://www.grupohpa.com",
    imageUrl:
      "https://d2k1crfmot9vtj.cloudfront.net/media/2d0c6d17820b91f84ee69e70f0d15e30_owBn78D.jpg",
  },
  {
    id: 2,
    name: "Hospital de Faro",
    address: "Rua Leão Penedo, 8000-386 Faro",
    directions: "Near the University of Algarve Gambelas Campus",
    features: ["Public Hospital", "Emergency Services", "Teaching Hospital"],
    contactNumber: "+351 289 891 100",
    email: "administracao@chalgarve.min-saude.pt",
    openingHours: "24/7",
    website: "http://www.chualgarve.min-saude.pt",
    imageUrl: "https://birthadvisor.pt/uploads/1486931781195-faro.jpg",
  },
  {
    id: 3,
    name: "Hospital Particular do Algarve - Alvor",
    address: "Estrada do Alvor, 8500-322 Portimão",
    directions: "Located in Alvor, near Portimão",
    features: ["Private Hospital", "International Patient Services", "Surgery"],
    contactNumber: "+351 282 420 400",
    email: "info.alvor@grupohpa.com",
    openingHours: "24/7",
    website: "https://www.grupohpa.com",
    imageUrl:
      "https://d2k1crfmot9vtj.cloudfront.net/media/cache/40c485e7848a0782555beef2bf3ea6df_jWRaYcw_mobile_slider.jpg",
  },
  {
    id: 4,
    name: "Hospital de Portimão",
    address: "Sítio do Poço Seco, 8500-338 Portimão",
    directions: "Northern area of Portimão",
    features: ["Public Hospital", "Emergency Department", "General Surgery"],
    contactNumber: "+351 282 450 300",
    email: "administracao@chalgarve.min-saude.pt",
    openingHours: "24/7",
    website: "http://www.chualgarve.min-saude.pt",
    imageUrl:
      "https://www.sulinformacao.pt/wp-content/uploads/2019/06/hospital-de-portimao-1200x900.jpg",
  },
  {
    id: 5,
    name: "Hospital de Lagos",
    address: "Rua Castelo dos Governadores, 8600-563 Lagos",
    directions: "Central Lagos",
    features: ["Basic Emergency Service", "Outpatient Care"],
    contactNumber: "+351 282 770 100",
    email: "administracao@chalgarve.min-saude.pt",
    openingHours: "24/7",
    website: "http://www.chualgarve.min-saude.pt",
    imageUrl:
      "https://www.barlavento.pt/wp-content/uploads/2023/12/Hospital-de-Sao-Goncalo-de-Lagos-860x484.jpg",
  },

  {
    id: 7,
    name: "Hospital de São Camilo",
    address: "Rua Dr. Coelho de Carvalho 21, 8800-387 Tavira",
    directions: "Central Tavira",
    features: ["Private Clinic", "Specialized Care", "Outpatient Services"],
    contactNumber: "+351 281 329 040",
    email: "geral@hospitalsaocamilo.pt",
    openingHours: "Mon-Fri: 8:00-20:00",
    website: "https://www.hospitalsaocamilo.pt",
    imageUrl:
      "https://www.sulinformacao.pt/wp-content/uploads/2019/01/Hospital-de-Sao-Camilo_SC-Misericordia_Portimao_1.jpg",
  },
];
