import { type SVGProps } from "react";

/**
 * Iris Icon · genérico para React.
 *
 * Carga: copiá `sprite.svg` a tu carpeta `public/` (Next.js / Vite),
 * y ajustá `spritePath` si lo guardás en otra ruta.
 *
 * Uso:
 *   <IrisIcon name="latido" size={24} />
 *   <IrisIcon name="paciente" className="text-iris-600" />
 *
 * El stroke usa currentColor → controlable con `color:` o utilidades Tailwind.
 * El dot indigo (#5847E0) está hardcoded en el sprite — es parte de la firma,
 * no debe cambiar con el color del padre.
 */

export type IrisIconName =
  | "latido"
  | "paciente"
  | "cuidado"
  | "videollamada"
  | "agenda"
  | "chat"
  | "receta"
  | "tablero"
  | "mensaje"
  | "hora"
  | "llamada"
  | "descargar"
  | "buscar"
  | "confirmado"
  | "alerta"
  | "aprobado"
  | "soporte"
  | "medico"
  | "clinica"
  | "tenant"
  | "config"
  | "check"
  | "vitales"
  | "iris";

export interface IrisIconProps extends Omit<SVGProps<SVGSVGElement>, "name"> {
  name: IrisIconName;
  size?: number | string;
  spritePath?: string;
}

export function IrisIcon({
  name,
  size = 24,
  spritePath = "/sprite.svg",
  ...rest
}: IrisIconProps) {
  return (
    <svg
      width={size}
      height={size}
      aria-hidden={rest["aria-label"] ? undefined : true}
      role={rest["aria-label"] ? "img" : undefined}
      {...rest}
    >
      <use href={`${spritePath}#icon-${name}`} />
    </svg>
  );
}

export default IrisIcon;
