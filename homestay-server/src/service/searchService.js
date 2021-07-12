import { Sequelize } from 'sequelize/types';
import db from '../models/index';

const HomeStay = db.HomeStay;
const Attraction = db.Attraction;
const Review = db.Review;
async function calculateAverageRatings (homestayId) {
    try {
        const ratings = await Review.findAll({
            attributes: [[Sequelize.fn('avg', Sequelize.col('stars')), 'total']],
            where: { homestayId}
        });
        console.log(ratings);
    } catch (err) {
        throw err;
    }
};
