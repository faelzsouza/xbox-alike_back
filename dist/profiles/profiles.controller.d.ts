import { ProfilesService } from './profiles.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
export declare class ProfilesController {
    private readonly profilesService;
    constructor(profilesService: ProfilesService);
    private readonly notFound;
    create(createProfileDto: CreateProfileDto): import(".prisma/client").Prisma.Prisma__ProfileClient<import(".prisma/client").Profile>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Profile & {
        favGames: import(".prisma/client").GamesOnProfiles[];
    })[]>;
    findAllByUserId(userId: string): import(".prisma/client").PrismaPromise<import(".prisma/client").Profile[]>;
    findOne(id: string): Promise<import(".prisma/client").Profile & {
        favGames: {
            game: import(".prisma/client").Game;
        }[];
    }>;
    update(id: string, updateProfileDto: UpdateProfileDto): Promise<import(".prisma/client").Profile>;
    remove(id: string): void;
}
