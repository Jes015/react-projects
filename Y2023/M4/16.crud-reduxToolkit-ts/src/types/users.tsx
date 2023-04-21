interface user {
	name: string;
	email: string;
	github: string;
}

interface userWithId extends user {
	id: string;
}

type userId = string;

export type { user, userWithId, userId };
