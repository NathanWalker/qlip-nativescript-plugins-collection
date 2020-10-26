export enum BoxType {
	circle = 'circle',
	square = 'square',
}

export interface CheckBoxInterface {
	text?: string;
	checked: boolean;
	toggle(): void;
}
