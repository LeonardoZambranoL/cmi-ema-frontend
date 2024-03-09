import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Resultado = {
  name: string;
  school: string;
  award: string;
  land: string;
};

type Props = {
  resultados: Resultado[];
};

export default function StudentLeaderBoard({ resultados }: Props) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nombre</TableHead>
          <TableHead>Institución</TableHead>
          <TableHead>Reconocimiento</TableHead>
          <TableHead>País</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {resultados.map((r: Resultado, index: number) => (
          <TableRow key={index}>
            <TableCell key={`${index} ${r.name}`}>{r.name}</TableCell>
            <TableCell key={`${index} ${r.school}`}>{r.school}</TableCell>
            <TableCell key={`${index} ${r.award}`}>{r.award}</TableCell>
            <TableCell key={`${index} ${r.land}`}>{r.land}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
