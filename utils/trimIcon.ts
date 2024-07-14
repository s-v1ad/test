export default function trimIcon(icon: string): string | undefined {
  return icon.match(/\/([^\/]+)\.(svg|png|jpg|jpeg|gif)$/)?.[1]
}
