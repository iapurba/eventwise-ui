export interface ContactDetailsType {
    firstName: string,
    lastName: string,
    phone: string,
};

export interface DeliveryDetailsType {
    addressLine1: string,
    addressLine2: string,
    landmark: string,
    city: string,
    state: string,
    pincode: string,
    addressType: string,
};

export interface BillingDetailsType {
    state: string,
    pincode: string,
};

export interface UserProfileType {
    id: string;
    contactDetails: ContactDetailsType;
    deliveryDetails: DeliveryDetailsType;
    billingDetails: BillingDetailsType;
};