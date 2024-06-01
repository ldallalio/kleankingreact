// https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/{locationId}/reviews

export const getGoogleReviews = async (accountId?: string, locationId?: string, quanity?: number) => {
    const response = await fetch(
        `https://mybusiness.googleapis.com/v4/accounts/${13845504841343815759}/`
    );
    const data = await response.json();
    return data;
    }

    // https://business.google.com/n/13845504841343815759/profile?fid=12304267580778063239