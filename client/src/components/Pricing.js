import React from "react";

const Pricing = () => {
  const plans = [
    {
      title: "Free",
      price: "₹0",
      description: "Perfect for trying out ProjectAI",
      features: [
        "Limited projects",
        "Community support (Coming soon)",
        "Email support",
        "Ad-supported experience",
      ],
      tag: "Best for beginners",
    },
    {
      title: "1 Month",
      price: "₹349",
      subtext: "No commitment",
      description: "Affordable access for short-term learning.",
      features: [
        "Everything in Free",
        "Unlimited project access",
        "Get help with AI",
        "Ad-free learning experience",
        "Generate custom projects with AI (beta)",
      ],
      tag: "Budget-friendly",
    },
    {
      title: "3 Months",
      price: "₹269",
      subtext: "Save 23%",
      description: "Great value for mastering a technology.",
      features: [
        "Everything in Free",
        "Unlimited project access",
        "Get help with AI",
        "Ad-free learning experience",
        "Generate custom projects with AI (beta)",
      ],
      tag: "Popular choice",
    },
    {
      title: "Full Year",
      price: "₹199",
      subtext: "Save 43%",
      description: "Incredible value at our lowest monthly rate.",
      features: [
        "Everything in Free",
        "Unlimited project access",
        "Get help with AI",
        "Ad-free learning experience",
        "Generate custom projects with AI (beta)",
      ],
      tag: "Most affordable",
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Premium Learning at Great Value</h2>
        <p className="mt-2 text-lg text-gray-300">
          Master new technologies by building amazing projects and AI assistance—quality learning that’s worth every penny.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6" style={{ display: "flex", maxWidth:"90%" , gap:"50px"}}>
        {plans.map((plan, index) => (
          <div key={index} className="bg-gray-800 rounded-2xl p-6 relative" style={{border:"2px solid white", borderRadius:"13px" , padding:"10px", width:"45%" ,minHeight:"50%"}} >
            <span className="absolute top-4 right-4 bg-purple-500 text-sm px-3 py-1 rounded-full">
              {plan.tag}
            </span>
            <h3 className="text-2xl font-semibold">{plan.title}</h3>
            <p className="text-4xl font-bold mt-2">{plan.price}</p>
            {plan.subtext && <p className="text-green-400">{plan.subtext}</p>}
            <p className="mt-4 text-gray-300">{plan.description}</p>
            <ul className="mt-4 space-y-2">
            {plan.features.map((feature, i) => (
                <div key={i} className="flex items-center text-lg">
                  <span className="text-green-400 text-2xl">✔️</span>
                  <span className="ml-2">{feature}</span>
                </div>
              ))}
            </ul>
            <button className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg" style={{color:"black",backgroundColor:"blue"}}>
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
