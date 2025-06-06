import type { Report } from "@/types/report"

// Helper function to create dates relative to now
const getRelativeDate = (daysAgo: number) => {
  const date = new Date()
  date.setDate(date.getDate() - daysAgo)
  return date.toISOString()
}

export const mockReports: Report[] = [
  {
    id: "rep-farm-001", // Kept original ID as per provided structure
    title: "Caminho de Acesso Danificado: Erosão e Buracos", // Adapted title for farm context
    category: "broken-sidewalk", // Category remains as requested
    location: "Fazenda Esperança - Acesso Principal", // Farm-specific location in Campo Mourão
    region: "Campo Mourão",
    date: getRelativeDate(2), // 2 days ago
    status: "resolved", // Status from original structure
    severity: 3,
    coordinates: {
      lat: -24.0416, // Example coordinates near Campo Mourão
      lng: -52.3787,
    },
    responseTime: 24,
    description: "Via de acesso à fazenda com erosão e buracos, dificultando o tráfego de veículos agrícolas e causando desgaste de equipamentos. Necessário reparo urgente para evitar atrasos na colheita.", // Adapted description
  },
  {
    id: "rep-farm-002", // Kept original ID
    title: "Área de Refúgio Inexistente: Exposição da Lavoura", // Adapted title
    category: "missing-tree", // Category remains
    location: "Fazenda Boa Vista - Talhão Central", // Farm-specific location
    region: "Campo Mourão",
    date: getRelativeDate(5), // 5 days ago
    status: "in-progress", // Status remains
    severity: 2,
    coordinates: {
      lat: -24.0852, // Example coordinates near Campo Mourão
      lng: -52.3015,
    },
    responseTime: 48,
    description: "Ausência de vegetação em talhão de soja, expondo a cultura a ventos fortes e aumentando a evapotranspiração, impactando o desenvolvimento das plantas. Estudo para implantação de quebra-ventos em andamento.", // Adapted description
  },
  {
    id: "rep-farm-003", // Kept original ID
    title: "Estresse Térmico em Lavoura: Falta de Sombreamento", // Adapted title
    category: "heat-island", // Category remains
    location: "Fazenda Água Clara - Parcela de Milho", // Farm-specific location
    region: "Campo Mourão",
    date: getRelativeDate(7), // 7 days ago
    status: "pending", // Status remains
    severity: 4,
    coordinates: {
      lat: -23.9987, // Example coordinates near Campo Mourão
      lng: -52.4503,
    },
    description: "Registro de altas temperaturas em parcela com milho, sem sombreamento adequado, impactando o desenvolvimento da cultura e causando perdas potenciais de produtividade. Monitoramento com sensores de temperatura iniciado.", // Adapted description
  },
  {
    id: "rep-farm-004", // Kept original ID
    title: "Acesso Inadequado para Equipamentos: Rampa de Carregamento", // Adapted title
    category: "missing-ramp", // Category remains
    location: "Fazenda Sol Nascente - Galpão de Armazenagem", // Farm-specific location
    region: "Campo Mourão",
    date: getRelativeDate(10), // 10 days ago
    status: "in-progress", // Status remains
    severity: 5,
    coordinates: {
      lat: -24.1234, // Example coordinates near Campo Mourão
      lng: -52.3333,
    },
    responseTime: 36,
    description: "Área de carregamento/descarregamento sem rampa adequada para tratores e colheitadeiras, dificultando a movimentação de máquinas e insumos, e aumentando o risco de acidentes. Projeto de construção em fase de aprovação.", // Adapted description
  },
  {
    id: "rep-farm-005", // Kept original ID
    title: "Drenagem Insuficiente no Pasto: Áreas Alagadas", // Adapted title
    category: "flooding", // Category remains
    location: "Fazenda Verde Vale - Pasto Norte", // Farm-specific location
    region: "Campo Mourão",
    date: getRelativeDate(12), // 12 days ago
    status: "pending", // Status remains
    severity: 5,
    coordinates: {
      lat: -23.5889, // Re-using old coordinates for this one, as I was asked to keep the original structure for the provided reports
      lng: -46.6346,
    },
    description: "Acúmulo frequente de água em área de pastagem após chuvas, comprometendo a qualidade do solo e a saúde do gado, além de dificultar o pastejo. Estudo para implantação de sistema de drenagem.", // Adapted description
  },
  {
    id: "rep-farm-006", // Kept original ID
    title: "Obstrução na Viela de Serviço: Material Empilhado", // Adapted title
    category: "obstruction", // Category remains
    location: "Fazenda Nova Safra - Viela Central", // Farm-specific location
    region: "Campo Mourão",
    date: getRelativeDate(15), // 15 days ago
    status: "resolved", // Status remains
    severity: 3,
    coordinates: {
      lat: -23.5638, // Re-using old coordinates
      lng: -46.6698,
    },
    responseTime: 72,
    description: "Material de construção e entulho acumulado em viela de serviço, bloqueando a passagem de veículos e máquinas. Obstrução removida após notificação, com área liberada para tráfego.", // Adapted description
  },
  {
    id: "rep-farm-007", // Kept original ID
    title: "Terreno Irregular em Área de Cultivo: Dificuldade de Plantio", // Adapted title
    category: "uneven-surface", // Category remains
    location: "Fazenda Campo Belo - Talhão 2", // Farm-specific location
    region: "Campo Mourão",
    date: getRelativeDate(18), // 18 days ago
    status: "rejected", // Status remains
    severity: 2,
    coordinates: {
      lat: -23.5616, // Re-using old coordinates
      lng: -46.6695,
    },
    responseTime: 24,
    description: "Irregularidades no terreno da área de plantio, apresentando desafios para a operação de máquinas e impactando a uniformidade da semeadura e a emergência das plantas. Necessário nivelamento do solo.", // Adapted description
  },
];
