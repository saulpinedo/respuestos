export class UpdateItemDto {
    readonly nombre?: string;
    readonly descripcion?: string;
    readonly precio?: number;
    readonly estado?: string;
    readonly codigo_pieza?: string;
    readonly fecha_creacion?: Date;
    readonly fecha_vendido?: Date;
    readonly vendedor_id?: number;
    readonly comprador_id?: number;
    readonly category_id?: number;
    readonly brand_id?: number;
    readonly model_id?: number;
    readonly year_id?: number;
} 