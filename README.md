# TvsM

## How to start your local DB instance
Make sure you have docker installed and running on your machine. Then run the following command in the root directory of this project:
```bash
$ supabase start
```

**Note:** Here is the documentation for the [supabase cli](https://supabase.com/docs/guides/cli/getting-started).

## How to migrate your local DB instance
Move to backend directory and copy the .env.example file to .env and fill in the missing values. Then run the following command in the backend directory:
```bash
$ npx prisma migrate dev
```
