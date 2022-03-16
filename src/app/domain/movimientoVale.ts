export interface MovimientoVale {
  id?: number;
  fecha_proceso?: Date;
  id_persona?: number;
  id_persona_proceso?: number;
  id_tipo_estado?: number;
  id_tipo_vale?: number;
  monto_otorgado?: number;
  monto_pedido?: number;
  concedido?: boolean;
  fecha?: Date;
}

