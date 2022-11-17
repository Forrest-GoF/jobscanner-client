import { HttpResponseDto } from './common';

export interface DutyResponseDto extends HttpResponseDto {
	data: string[];
}
