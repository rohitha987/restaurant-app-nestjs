import { RestaurantService } from './restaurant.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';
export declare class RestaurantController {
    private readonly restaurantService;
    constructor(restaurantService: RestaurantService);
    create(createRestaurantDto: CreateRestaurantDto): Promise<Restaurant>;
    findAll(): Promise<Restaurant[]>;
    findOne(id: string): Promise<Restaurant>;
    update(id: string, updateRestaurantDto: UpdateRestaurantDto): Promise<Restaurant>;
}
