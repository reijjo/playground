const envVars = [
	"PORT",
	"MONGO_USER",
	"MONGO_PW",
	"MONGO_CLUSTER",
	"MONGO_EXTRA",
	"SESSION_SECRET"
] as const;

for (const varName of envVars) {
	if (!Bun.env[varName]) {
		throw new Error(`Missing env variable: ${varName}`);
	}
}

const {
	PORT,
	MONGO_USER,
	MONGO_PW,
	MONGO_CLUSTER,
	MONGO_EXTRA,
	SESSION_SECRET
} = Bun.env;

const DATABASE_URL = `mongodb+srv://${MONGO_USER}:${MONGO_PW}@${MONGO_CLUSTER}/${MONGO_EXTRA}`;

export const config = {
	PORT,
	MONGO_USER,
	MONGO_PW,
	MONGO_CLUSTER,
	MONGO_EXTRA,
	DATABASE_URL,
	SESSION_SECRET
};