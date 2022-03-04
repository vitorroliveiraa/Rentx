import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { AppError } from '@shared/errors/AppError';

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError('Token missing!', 401);
    }
    // Por não passar nada do lado esquerdo, o parâmetro é ignorado
    const [, token] = authHeader.split(' ');

    try {
        const { sub: user_id } = verify(
            token,
            'a90578b71d81019a0d27a151421bddd6'
        ) as IPayload;

        const userRepository = new UsersRepository();

        const user = userRepository.findById(user_id);

        if (!user) {
            throw new AppError('User does not exists!', 401);
        }

        request.user = {
            id: user_id,
        };

        next();
    } catch {
        throw new AppError('Invalid token!', 401);
    }
}
