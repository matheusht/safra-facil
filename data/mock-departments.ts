import type { Department } from "@/types/department"

// Definindo a interface Department para corresponder ao uso do componente
interface Department {
  id: string;
  name: string;
  memberCount: number;
  openIssues: number; // Renomeado de openIssuesCount para openIssues
  avgResolutionTime: number; // em horas
  performance: "good" | "average" | "poor";
}

export const mockDepartments: Department[] = [
  {
    id: "dept-agri-001",
    name: "Engenharia Agronômica",
    memberCount: 8,
    openIssues: 15, // Problemas como análise de solo, doenças
    avgResolutionTime: 48, // Tempo para analisar e propor soluções
    performance: "good",
  },
  {
    id: "dept-agri-002",
    name: "Serviços Veterinários",
    memberCount: 5,
    openIssues: 7, // Questões de saúde animal, vacinação
    avgResolutionTime: 24,
    performance: "good",
  },
  {
    id: "dept-agri-003",
    name: "Gestão de Maquinário Agrícola",
    memberCount: 10,
    openIssues: 28, // Manutenção de tratores, colheitadeiras
    avgResolutionTime: 72,
    performance: "poor", // Pode ter mais problemas devido à complexidade
  },
  {
    id: "dept-agri-004",
    name: "TI e Automação Agrícola",
    memberCount: 6,
    openIssues: 10, // Problemas com sensores, drones, softwares de gestão
    avgResolutionTime: 36,
    performance: "average",
  },
  {
    id: "dept-agri-005",
    name: "Recursos Hídricos e Irrigação",
    memberCount: 4,
    openIssues: 5, // Problemas com sistemas de irrigação, gestão da água
    avgResolutionTime: 30,
    performance: "good",
  },
  {
    id: "dept-agri-006",
    name: "Logística e Armazenagem",
    memberCount: 7,
    openIssues: 12, // Questões de transporte de safra, armazenamento de grãos
    avgResolutionTime: 60,
    performance: "average",
  },
  {
    id: "dept-agri-007",
    name: "Certificações e Qualidade",
    memberCount: 3,
    openIssues: 3, // Auditorias, conformidade com normas
    avgResolutionTime: 96, // Processos mais longos
    performance: "good",
  },
]
