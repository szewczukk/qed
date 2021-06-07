export interface Label {
	id: number;
	name: string;
}

export interface Issue {
	id: number;
	labels: Label[];
	title: string;
}

export type IssueWithutLabels = Omit<Issue, 'labels'>;

export interface LinkedData {
	label: string;
	issues: IssueWithutLabels[];
}
