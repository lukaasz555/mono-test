import { INestApplication, Injectable } from "@nestjs/common";
import { TrpcService } from "./trpc.service";
import { z } from "zod";
import * as trpcExpress from '@trpc/server/adapters/express';

@Injectable()
export class TrpcRouter {
    constructor(private readonly trpcService: TrpcService) {}

    appRouter = this.trpcService.router({
        test: this.trpcService.procedure.input(z.object({name: z.string().optional()})).query(({input}) => {
            return `Test Procedure - ${input.name ? input.name : 'no zod input'}`;
        })
    })

    async applyMiddleware(app: INestApplication) {
        app.use(`/trpc`, trpcExpress.createExpressMiddleware({router: this.appRouter}));
    }
}

export type AppRouter = TrpcRouter['appRouter'];
