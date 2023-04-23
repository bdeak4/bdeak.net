export type Organization = {
	name: string;
	web?: string;
	title: string;
	startDate: Date;
	endDate?: Date;
	projects: Project[];
	nonprofit?: boolean;
};

export type Project = {
	name: string;
	about: string;
	description: string;
	tech: Tech[];
	web?: string;
	src?: string;
};

export type Tech = {
	name: string;
	image: string;
};
