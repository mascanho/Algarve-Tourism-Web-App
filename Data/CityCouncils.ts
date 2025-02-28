export interface CityCouncils {
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

export const CityCouncils: CityCouncils[] = [
  {
    id: 1,
    name: "Câmara Municipal de Albufeira",
    address: "Rua do Município, 8200-863 Albufeira",
    directions: "Located in central Albufeira, near the Municipal Library",
    features: ["Tourist Information", "Social Services", "Urban Planning"],
    contactNumber: "+351 289 599 500",
    email: "geral@cm-albufeira.pt",
    openingHours: "Mon-Fri: 9:00 - 17:00",
    website: "https://www.cm-albufeira.pt",
    imageUrl:
      "https://lh3.googleusercontent.com/p/AF1QipO0kBSDcVLCpHp-Ncb6RfylfYgXYOm8HG6EjgR5=s1360-w1360-h1020",
  },
  {
    id: 2,
    name: "Câmara Municipal de Alcoutim",
    address: "Rua do Município 12, 8970-066 Alcoutim",
    directions: "In the historic center of Alcoutim",
    features: [
      "Cultural Services",
      "Environmental Department",
      "Civil Protection",
    ],
    contactNumber: "+351 281 540 500",
    email: "geral@cm-alcoutim.pt",
    openingHours: "Mon-Fri: 9:00 - 17:00",
    website: "https://www.cm-alcoutim.pt",
    imageUrl:
      "https://maisalgarve.pt/wp-content/uploads/2018/12/images_Dezembro2018_CamaraMunAcoutim.JPG",
  },
  {
    id: 3,
    name: "Câmara Municipal de Aljezur",
    address: "Rua Capitão Salgueiro Maia, 8670-005 Aljezur",
    directions: "Near the Municipal Market",
    features: [
      "Heritage Protection",
      "Local Development",
      "Sports Facilities Management",
    ],
    contactNumber: "+351 282 990 010",
    email: "geral@cm-aljezur.pt",
    openingHours: "Mon-Fri: 9:00 - 17:00",
    website: "https://www.cm-aljezur.pt",
    imageUrl:
      "https://postal.pt/wp-content/uploads/2022/01/Ca%CC%82mara-de-Aljezur.jpg",
  },
  {
    id: 4,
    name: "Câmara Municipal de Castro Marim",
    address: "Rua Dr. José Alves Moreira 10, 8950-138 Castro Marim",
    directions: "Next to Castro Marim Castle",
    features: ["Tourism Office", "Environmental Services", "Cultural Events"],
    contactNumber: "+351 281 510 740",
    email: "expediente@cm-castromarim.pt",
    openingHours: "Mon-Fri: 9:00 - 17:00",
    website: "https://www.cm-castromarim.pt",
    imageUrl:
      "https://jornaldoalgarve.pt/wp-content/uploads/2022/03/Castro-Marim_camara-municipal.jpg",
  },
  {
    id: 5,
    name: "Câmara Municipal de Faro",
    address: "Largo da Sé, 8004-001 Faro",
    directions: "In the historic center, near Faro Cathedral",
    features: ["Municipal Services", "Cultural Department", "Urban Planning"],
    contactNumber: "+351 289 870 870",
    email: "geral@cm-faro.pt",
    openingHours: "Mon-Fri: 9:00 - 17:00",
    website: "https://www.cm-faro.pt",
    imageUrl:
      "https://www.cm-faro.pt/util/imgLoader.ashx?w=1280&img=/upload_files/client_id_1/website_id_1/Noticias-Documentos/Camara-de-Faro_.jpg",
  },
  {
    id: 6,
    name: "Câmara Municipal de Lagoa",
    address: "Largo do Município, 8401-851 Lagoa",
    directions: "Central location in Lagoa",
    features: ["Citizen Support", "Education Services", "Sports Department"],
    contactNumber: "+351 282 380 400",
    email: "expediente@cm-lagoa.pt",
    openingHours: "Mon-Fri: 9:00 - 17:00",
    website: "https://www.cm-lagoa.pt",
    imageUrl: "https://algarve-portal.com/imgs/uploads/Lagoa-Camara2.jpg",
  },
  {
    id: 7,
    name: "Câmara Municipal de Lagos",
    address: "Praça Gil Eanes, 8600-668 Lagos",
    directions: "Historic center of Lagos",
    features: ["Tourism Services", "Cultural Heritage", "Maritime Activities"],
    contactNumber: "+351 282 780 900",
    email: "expediente.geral@cm-lagos.pt",
    openingHours: "Mon-Fri: 9:00 - 17:00",
    website: "https://www.cm-lagos.pt",
    imageUrl:
      "https://www.cm-lagos.pt/images/stories/flexicontent/l_pacos-concelho-sec-xxi-11.jpg",
  },
  {
    id: 8,
    name: "Câmara Municipal de Loulé",
    address: "Praça da República, 8100-951 Loulé",
    directions: "Near the Municipal Market",
    features: [
      "Social Services",
      "Economic Development",
      "Environmental Protection",
    ],
    contactNumber: "+351 289 400 600",
    email: "geral@cm-loule.pt",
    openingHours: "Mon-Fri: 9:00 - 17:00",
    website: "https://www.cm-loule.pt",
    imageUrl:
      "https://servicosonline.cm-loule.pt/imgcrop/cmloule-wirepaper/uploads/links_list/default_list_image/51/cml_1_1280_600.jpeg",
  },
  {
    id: 9,
    name: "Câmara Municipal de Monchique",
    address: "Travessa da Portela 2, 8550-470 Monchique",
    directions: "In the mountain town center",
    features: ["Rural Development", "Forest Management", "Tourism Promotion"],
    contactNumber: "+351 282 910 200",
    email: "geral@cm-monchique.pt",
    openingHours: "Mon-Fri: 9:00 - 17:00",
    website: "https://www.cm-monchique.pt",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/cf/Pa%C3%A7os_do_Concelho_-_Monchique_-_01.02.2020.jpg",
  },
  {
    id: 10,
    name: "Câmara Municipal de Olhão",
    address: "Largo Sebastião Martins Mestre, 8700-349 Olhão",
    directions: "Near the waterfront markets",
    features: [
      "Fishing Industry Support",
      "Urban Planning",
      "Cultural Services",
    ],
    contactNumber: "+351 289 700 100",
    email: "geral@cm-olhao.pt",
    openingHours: "Mon-Fri: 9:00 - 17:00",
    website: "https://www.cm-olhao.pt",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c6/2017-02-13_C%C3%A2mara_Municipal%2C_Olh%C3%A3o.JPG",
  },
  {
    id: 11,
    name: "Câmara Municipal de Portimão",
    address: "Praça 1º de Maio, 8500-543 Portimão",
    directions: "Central location near the river",
    features: ["Tourism Office", "Sports Facilities", "Cultural Events"],
    contactNumber: "+351 282 470 700",
    email: "geral@cm-portimao.pt",
    openingHours: "Mon-Fri: 9:00 - 17:00",
    website: "https://www.cm-portimao.pt",
    imageUrl:
      "https://www.barlavento.pt/wp-content/uploads/2023/12/Portimao-atendimento-on-line.jpg",
  },
  {
    id: 12,
    name: "Câmara Municipal de São Brás de Alportel",
    address: "Rua Gago Coutinho 1, 8150-151 São Brás de Alportel",
    directions: "Town center location",
    features: ["Rural Development", "Education Services", "Social Support"],
    contactNumber: "+351 289 840 000",
    email: "geral@cm-sbras.pt",
    openingHours: "Mon-Fri: 9:00 - 17:00",
    website: "https://www.cm-sbras.pt",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Edif%C3%ADcio_da_C%C3%A2mara_Municipal_de_S%C3%A3o_Br%C3%A1s_de_Alportel_2.jpg/1024px-Edif%C3%ADcio_da_C%C3%A2mara_Municipal_de_S%C3%A3o_Br%C3%A1s_de_Alportel_2.jpg",
  },
  {
    id: 13,
    name: "Câmara Municipal de Silves",
    address: "Largo do Município, 8300-117 Silves",
    directions: "Near the historic castle",
    features: [
      "Heritage Conservation",
      "Cultural Programs",
      "Environmental Services",
    ],
    contactNumber: "+351 282 440 800",
    email: "gabinete.presidente@cm-silves.pt",
    openingHours: "Mon-Fri: 9:00 - 17:00",
    website: "https://www.cm-silves.pt",
    imageUrl:
      "https://www.cm-silves.pt/util/imgLoader.ashx?w=1280&img=/upload_files/client_id_1/website_id_1/Noticias/Ultimas/2017/pa%C3%A7os%20do%20concelho_2.jpg",
  },
  {
    id: 14,
    name: "Câmara Municipal de Tavira",
    address: "Praça da República, 8800-951 Tavira",
    directions: "Historic center, near the Roman Bridge",
    features: [
      "Heritage Protection",
      "Tourism Services",
      "Cultural Activities",
    ],
    contactNumber: "+351 281 320 500",
    email: "camara@cm-tavira.pt",
    openingHours: "Mon-Fri: 9:00 - 17:00",
    website: "https://www.cm-tavira.pt",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/66a8bd053e8d5f4e97f63508/1722873018459-DOXKGYQLJU709U62J98K/cmtavira2023_orig.jpg",
  },
  {
    id: 15,
    name: "Câmara Municipal de Vila do Bispo",
    address: "Largo do Município, 8650-407 Vila do Bispo",
    directions: "Town center of Vila do Bispo",
    features: [
      "Environmental Protection",
      "Tourism Development",
      "Sports Services",
    ],
    contactNumber: "+351 282 630 600",
    email: "geral@cm-viladobispo.pt",
    openingHours: "Mon-Fri: 9:00 - 17:00",
    website: "https://www.cm-viladobispo.pt",
    imageUrl:
      "https://www.barlavento.pt/wp-content/uploads/2023/12/Vila-do-Bispo-1-1.jpg",
  },
  {
    id: 16,
    name: "Câmara Municipal de Vila Real de Santo António",
    address: "Praça Marquês de Pombal, 8900-231 Vila Real de Santo António",
    directions: "Central square of VRSA",
    features: ["Border Services", "Maritime Activities", "Urban Planning"],
    contactNumber: "+351 281 510 000",
    email: "geral@cm-vrsa.pt",
    openingHours: "Mon-Fri: 9:00 - 17:00",
    website: "https://www.cm-vrsa.pt",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNARapyVuckcp1gdwRDfaElu29BYH6G12OFQ&s",
  },
];
