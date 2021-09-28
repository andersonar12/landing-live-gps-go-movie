export interface Plan {
    description?: string;
    device_quantity: number;
    duration: number;
    name: string;
    plan_id: number;
    price: string;
    status: number;
}

export interface ResponsePlans {
    plans: Plan[];
}