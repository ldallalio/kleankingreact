import React, { useEffect } from 'react'
import googleReivews from "../../util/GoogleReviews.json"
import { IReview } from '../../common/interfaces'
import { Icon } from '@fluentui/react/lib/Icon'
import { initializeIcons } from '@fluentui/react'



const GoogleReviews = () => {
    //get reviews from a json file and display them
    const rev = googleReivews as IReview[]
    const numberOfReviews = rev.length;
    const [fiveRandomReviews, setFiveRandomReviews] = React.useState<IReview[]>([])

    const getFiveRandomReviews = () => {
        const randomReviews = []
        for (let i = 0; i < 5; i++) {
            const randomIndex = Math.floor(Math.random() * numberOfReviews)
            randomReviews.push(rev[randomIndex])
        }
        setFiveRandomReviews(randomReviews)
        return randomReviews
    }

    useEffect(() => {
        initializeIcons();
        getFiveRandomReviews()
    }, [])
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                // border: "1px solid black",
                justifyContent: "center",
                alignItems: "center",
                padding: "1rem",
            }}
        >
            <h1
                style={{
                    color: "gold",
                    textAlign: "center",
                    fontSize: "3rem",
                }}
            >Google Reviews</h1>
            <div
                style={{
                    padding: "1rem",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                    // border: "1px solid red",
                    alignSelf: "center",
                    justifyContent: "center",
                    gap: "16px",
                }}
            >
                {fiveRandomReviews.map((review, index) => {
                    return (
                        <div key={index}
                            style={{
                                display: "grid",
                                gridTemplateRows: "auto auto 1fr auto",
                                flexDirection: "column",
                                padding: "1rem",
                                justifyContent: "space-between",
                                boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                                borderRadius: "5px",
                            }}
                        >


                            <h3
                                style={{
                                    textAlign: "center",
                                    fontSize: "1rem",
                                }}
                            >{review.name}</h3>
                            <div
                                style={{
                                    display: "flex",
                                    // justifyContent: "space-between",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Icon
                                    iconName="FavoriteStarFill"
                                    style={{ color: "gold" }}
                                />
                                <Icon
                                    iconName="FavoriteStarFill"
                                    style={{ color: "gold" }}
                                />
                                <Icon
                                    iconName="FavoriteStarFill"
                                    style={{ color: "gold" }}
                                />
                                <Icon
                                    iconName="FavoriteStarFill"
                                    style={{ color: "gold" }}
                                />
                                <Icon
                                    iconName="FavoriteStarFill"
                                    style={{ color: "gold" }}
                                />

                            </div>

                            <p
                                style={{
                                    fontWeight: "normal",
                                    whiteSpace: "pre-wrap",
                                    overflowWrap: "break-word",
                                    textAlign: "center",

                                }}
                            >{review.review}</p>
                            <p>{review.date}</p>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default GoogleReviews