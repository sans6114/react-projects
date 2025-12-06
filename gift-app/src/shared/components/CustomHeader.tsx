import React from 'react';

interface Props {
    title: string,
    description?: string,
}


export const CustomHeader = ({ title, description }: Props) => {
    return (
        <div className="hero p-10">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">{title}</h1>
                    {
                        description && (
                            <p className="py-6">
                                {description}
                            </p>
                        )
                    }

                </div>
            </div>
        </div>
    )
}
