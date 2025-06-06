"use client"

import type React from "react"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Clock, AlertTriangle, ChevronRight } from "lucide-react"
// Importação de Link de 'next/link' removida e substituída por <a> tag
// import Link from "next/link" 
import type { Department } from "@/types/department"

interface TeamOverviewProps {
  departments: Department[]
}

export function TeamOverview({ departments }: TeamOverviewProps) {
  // Ordena os departamentos pelo número de problemas em aberto (descendente)
  const sortedDepartments = [...departments].sort((a, b) => b.openIssues - a.openIssues)

  return (
    <Card className="border-4 border-black shadow-neobrutalism">
      <CardHeader className="bg-blue-100 border-b-4 border-black">
        <CardTitle className="text-xl">Visão Geral da Equipe</CardTitle> {/* Translated: Team Overview */}
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-4 border-black bg-gray-100">
                <th className="px-4 py-3 text-left font-bold">Departamento</th> {/* Translated: Department */}
                <th className="px-4 py-3 text-center font-bold">Membros</th> {/* Translated: Members */}
                <th className="px-4 py-3 text-center font-bold">Problemas em Aberto</th> {/* Translated: Open Issues */}
                <th className="px-4 py-3 text-center font-bold">Média de Resolução</th> {/* Translated: Avg. Resolution */}
                <th className="px-4 py-3 text-center font-bold">Status</th> {/* Translated: Status */}
                <th className="px-4 py-3 text-center font-bold"></th>
              </tr>
            </thead>
            <tbody className="divide-y-4 divide-black">
              {sortedDepartments.map((department) => (
                <tr key={department.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <div className="p-2 rounded-full bg-blue-100 border-2 border-black mr-3">
                        <Users className="h-4 w-4 text-blue-500" />
                      </div>
                      <div>
                        <div className="font-medium">{department.name}</div>
                        <div className="text-sm text-gray-500">{department.lead}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center font-bold">{department.memberCount}</td>
                  <td className="px-4 py-3 text-center font-bold">{department.openIssues}</td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center">
                      <Clock className="h-4 w-4 mr-1 text-gray-500" />
                      <span>{department.avgResolutionTime} horas</span> {/* Translated: hours */}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center">
                    {department.status === "overloaded" ? (
                      <Badge className="bg-red-500 text-white border-2 border-black flex items-center gap-1 mx-auto">
                        <AlertTriangle className="h-3 w-3" />
                        Sobrecarregado {/* Translated: Overloaded */}
                      </Badge>
                    ) : department.status === "busy" ? (
                      <Badge className="bg-yellow-500 text-white border-2 border-black mx-auto">Ocupado</Badge> /* Translated: Busy */
                    ) : (
                      <Badge className="bg-green-500 text-white border-2 border-black mx-auto">Disponível</Badge> /* Translated: Available */
                    )}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {/* Substituído Link por <a> para resolver o erro de compilação */}
                    <a href="/admin/dashboard#teams" className="text-blue-500 hover:text-blue-700">
                      <div className="flex items-center justify-center">
                        <span className="mr-1">Gerenciar</span> {/* Translated: Manage */}
                        <ChevronRight className="h-4 w-4" />
                      </div>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
