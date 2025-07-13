'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

export default function Agendamento() {
  const [dataSelecionada, setDataSelecionada] = useState<Date | undefined>();
  const [horario, setHorario] = useState<string>("");
  const [agendado, setAgendado] = useState<boolean>(false);

  const horariosDisponiveis = ["09:00", "10:00", "14:00", "15:00"];

  const agendar = () => {
    if (dataSelecionada && horario) {
      console.log("Agendado para:", dataSelecionada, horario);
      setAgendado(true);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 rounded-2xl shadow-xl bg-white">
      <h1 className="text-2xl font-bold mb-4">Agende um horário</h1>
      <Calendar
        mode="single"
        selected={dataSelecionada}
        onSelect={setDataSelecionada}
        className="rounded-md border"
      />

      {dataSelecionada && (
        <div className="mt-4">
          <p className="font-medium">Horários disponíveis em {format(dataSelecionada, "dd/MM/yyyy")}:</p>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {horariosDisponiveis.map((h) => (
              <button
                key={h}
                onClick={() => setHorario(h)}
                className={`p-2 rounded-xl border ${
                  horario === h ? "bg-blue-500 text-white" : "hover:bg-gray-100"
                }`}
              >
                {h}
              </button>
            ))}
          </div>
        </div>
      )}

      <Button className="mt-6 w-full" onClick={agendar} disabled={!dataSelecionada || !horario}>
        Confirmar Agendamento
      </Button>

      {agendado && (
        <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-xl">
          Agendamento confirmado para {format(dataSelecionada!, "dd/MM/yyyy")} às {horario}!
        </div>
      )}
    </div>
  );
}
