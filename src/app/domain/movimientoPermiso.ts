export interface MovimientoPermiso {
  id?: number;
  fecha?: Date;
  fecha_fin?: Date;
  fecha_inicio?: Date;
  fecha_proceso?: Date;
  fijo?: string;
  id_persona?: number;
  id_persona_proceso?: number;
  id_tipo_estado?: number;
  id_tipo_permiso?: number;
  concedido?: boolean;
  dias_otorgado?: number;
  dias_pedido?: number;
}

