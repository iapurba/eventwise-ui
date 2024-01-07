import { UserProfileType } from "../types/UserProfileType";

export const normalizeUserRtkData = (rtkData: any) => {
    const userObj = {
        id: rtkData?.id,
        email: rtkData?.email ? rtkData.email : '',
        firstName: rtkData?.firstName ? rtkData.firstName : '',
        lastName: rtkData?.lastName ? rtkData.lastName : '',
        phone: rtkData?.phone ? rtkData.phone : '',
        deliveryDetails: {
            addressLine1: rtkData?.deliveryDetails?.addressLine1
                ? rtkData.deliveryDetails.addressLine1 : '',
            addressLine2: rtkData?.deliveryDetails?.addressLine2
                ? rtkData.deliveryDetails.addressLine2 : '',
            landmark: rtkData?.deliveryDetails?.landmark
                ? rtkData.deliveryDetails.landmark : '',
            city: rtkData?.deliveryDetails?.city
                ? rtkData.deliveryDetails.city : '',
            state: rtkData?.deliveryDetails?.state
                ? rtkData.deliveryDetails.state : '',
            pincode: rtkData?.deliveryDetails?.pincode
                ? rtkData.deliveryDetails.pincode : '',
            addressType: rtkData?.deliveryDetails?.addressType
                ? rtkData.deliveryDetails.addressType : '',
        },
        billingDetails: {
            state: rtkData?.billingDetails?.state
                ? rtkData.billingDetails.state : '',
            pincode: rtkData?.billingDetails?.pincode
                ? rtkData.billingDetails.pincode : '',
        },
        favouriteEvents: rtkData?.favouriteEvents
            ? rtkData.favouriteEvents : [],
    }
    return userObj;
};

export const constructUpdateUserJsonPayload = (data: UserProfileType) => {
    const userPayload = {
        firstName: data?.contactDetails?.firstName ?? null,
        lastName: data?.contactDetails?.lastName ?? null,
        phone: data?.contactDetails?.phone ?? null,
        deliveryDetails: {
            addressLine1: data?.deliveryDetails?.addressLine1 ?? null,
            addressLine2: data?.deliveryDetails?.addressLine2 ?? null,
            landmark: data?.deliveryDetails?.landmark ?? null,
            city: data?.deliveryDetails?.city ?? null,
            state: data?.deliveryDetails?.state ?? null,
            pincode: data?.deliveryDetails?.pincode ?? null,
            addressType: data?.deliveryDetails.addressType ?? null,
        },
        billingDetails : {
            state: data?.billingDetails?.state ?? null,
            pincode: data?.billingDetails?.pincode ?? null,
        },
    };

    return userPayload;
};