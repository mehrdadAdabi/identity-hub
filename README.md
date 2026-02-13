<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>
<p align="center">
  <strong>A comprehensive NestJS Authentication API</strong>
</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project Structure

```
src/
├── auth/                      # Authentication module
│   ├── auth.controller.ts     # Auth endpoints
│   ├── auth.service.ts        # Auth business logic
│   ├── auth.module.ts         # Auth module definition
│   ├── dto/                   # Data Transfer Objects
│   │   ├── login/
│   │   │   └── login.dto.ts
│   │   └── register/
│   │       └── register.dto.ts
│   ├── entities/              # Database entities
│   │   └── user.entity.ts
│   ├── guards/                # Route guards
│   │   └── jwt-auth.guard.ts
│   └── strategies/            # Passport strategies
│       └── jwt.strategy.ts
├── migrations/                # TypeORM migrations
├── app.controller.ts          # Main app controller
├── app.service.ts             # Main app service
├── app.module.ts              # Root module
├── main.ts                    # Application entry point
└── data-source.ts             # TypeORM configuration
```

## Prerequisites

- Node.js (v18 or higher)
- PostgreSQL (v12 or higher)
- pnpm package manager

## Installation

```bash
$ pnpm install
```

## Configuration

Create a `.env` file in the project root with the following variables:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=password
DB_NAME=auth_db
JWT_SECRET=your_jwt_secret_key
```

## Running the Application

```bash
# development mode
$ pnpm run start

# watch mode (auto-reload)
$ pnpm run start:dev

# debug mode
$ pnpm run start:debug

# production mode
$ pnpm run start:prod
```

The application will start on `http://localhost:3000` by default.

## API Documentation

Swagger API documentation is available at `http://localhost:3000/api` when the application is running.

### Available Endpoints

- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login user and get JWT token
- `GET /auth/users` - Get all users (protected)

## Database

### TypeORM Migrations

Run migrations to set up the database schema:

```bash
$ pnpm run typeorm migration:run
```

Generate a new migration:

```bash
$ pnpm run typeorm migration:generate src/migrations/YourMigrationName
```

## Testing

```bash
# unit tests
$ pnpm run test

# watch mode for tests
$ pnpm run test:watch

# test coverage
$ pnpm run test:cov

# e2e tests
$ pnpm run test:e2e

# debug tests
$ pnpm run test:debug
```

## Code Quality

```bash
# lint code
$ pnpm run lint

# format code
$ pnpm run format

# build project
$ pnpm run build
```

## Useful Resources

- [NestJS Documentation](https://docs.nestjs.com) - Official NestJS documentation
- [TypeORM Documentation](https://typeorm.io/) - TypeORM guides and API reference
- [JWT Authentication](https://jwt.io/) - Learn about JWT tokens
- [Passport.js](http://www.passportjs.org/) - Passport authentication middleware
- [Swagger/OpenAPI](https://swagger.io/) - API documentation standards

## License

This project is licensed under the UNLICENSED license - see the LICENSE file for details

- **Database**: PostgreSQL
- **ORM**: TypeORM
- **Authentication**: JWT with Passport
- **Password Hashing**: bcrypt
- **Validation**: class-validator & class-transformer
- **API Docs**: Swagger/OpenAPI
- **Testing**: Jest & Supertest
- **Linting**: ESLint & Prettier
- **Container**: Docker

## Contributing

Feel free to submit issues and enhancement requests!

## Support

For questions and support, please reach out to the development team.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Mehrdad Adabi](https://twitter.com/kammysliwiec)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
