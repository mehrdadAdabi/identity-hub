# Database Migrations Guide

## Running Existing Migrations

```bash
# Run pending migrations
pnpm run typeorm migration:run -d src/data-source.ts
```

## Generating New Migrations

After making changes to entities, generate a migration file:

```bash
# Generate a new migration (auto-detect changes from entities)
pnpm run typeorm migration:generate src/migrations/YourMigrationName -d src/data-source.ts
```

**Example:**

```bash
pnpm run typeorm migration:generate src/migrations/add-user-profile -d src/data-source.ts
```

This will create a new migration file like: `src/migrations/[timestamp]-add-user-profile.ts`

## Migration Lifecycle

### 1. Update Entity

```typescript
// src/auth/entities/user.entity/user.entity.ts
export class User {
  @Column()
  newField: string;
}
```

### 2. Generate Migration

```bash
pnpm run typeorm migration:generate src/migrations/add-new-field -d src/data-source.ts
```

### 3. Review Generated Migration

The migration file will be auto-generated with proper SQL

### 4. Run Migration

```bash
pnpm run typeorm migration:run -d src/data-source.ts
```

## Useful Commands

```bash
# Show pending migrations
pnpm run typeorm migration:show -d src/data-source.ts

# Revert last migration
pnpm run typeorm migration:revert -d src/data-source.ts

# Create empty migration
pnpm run typeorm migration:create src/migrations/YourMigrationName
```

## Important Notes

- Always review generated migrations before running them
- The `data-source.ts` file defines which entities to track
- Add new entities to `data-source.ts` before generating migrations
- Migrations run in order based on timestamp in filename
- Never modify past migration files in production

## Troubleshooting

If migrations don't generate correctly:

1. Ensure entity file has `@Entity()` decorator
2. Check `entities` array in `data-source.ts`
3. Verify database connection settings in `.env`
4. Run `pnpm install` to ensure dependencies are installed
