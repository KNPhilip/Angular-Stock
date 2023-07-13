import { Category, Item } from "./Item";

export const Items: Item[] = [
    {
        id: 1,
        text: 'AirPods Pro',
        quantity: 2,
        category: Category.Audio,
        missing: true
    },
    {
        id: 2,
        text: 'HDMI',
        quantity: 14,
        category: Category.Cable,
        missing: false
    },
    {
        id: 3,
        text: 'Macbook Pro',
        quantity: 1,
        category: Category.PC,
        missing: false
    },
    {
        id: 4,
        text: 'Cheeseburger',
        quantity: 3,
        category: Category.Other,
        missing: false
    }
]