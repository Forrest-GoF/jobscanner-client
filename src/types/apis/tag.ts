import { HttpResponseDto } from './common';

export interface TagResponseDto extends HttpResponseDto {
	data: string[];
}
