export class CreateRatingDto {
    readonly puntuacion: number;
    readonly comentario?: string;
    readonly user_id?: number;
    readonly target_user_id?: number;
    readonly created_at?: Date;
} 