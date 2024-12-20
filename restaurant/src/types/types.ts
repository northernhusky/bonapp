export interface MenuItem {
    id: string;
    title: string;
    description: string;
    category: string;
    img: string;
    price: number;
    rating: number;
    toppings: string[];
}

export interface MenuState {
    items: MenuItem[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

export interface CartItem extends MenuItem {
    quantity: number;
}

export interface CartState {
    items: CartItem[];
}