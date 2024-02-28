import React from "react";
import { TbArrowsExchange } from "react-icons/tb";

const page = () => {
  return (
    <div>
      <h1 className="flex items-center justify-center gap-x-2 h-28 border-b-2 text-xl font-medium text-gray-600">
        <TbArrowsExchange />
        RETURN & REFUND POLICY
      </h1>
      <div className="main-container my-10">
        <div className="w-[90%] lg:w-[70%] mx-auto flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">
            HOW CAN YOU RETURN AN ITEM?
          </h3>
          <p>Here are the terms and conditions for returns:</p>
          <p>
            In the event that you receive a product that is damaged during
            shipping, defective, or not the product you ordered, kindly return
            it to us. We will promptly arrange for a replacement or issue a
            refund, subject to the following terms and conditions.
          </p>
          <ol className="list-disc list-inside space-y-3 text-gray-700">
            <li>
              Inside Dhaka:
              <ol className="list-inside list-disc ml-6">
                <li>{`Orders must be checked in front of the delivery person. We won't accept the product after it has been delivered.`}</li>
                <li>
                  {" "}
                  If you find any defects, return the product to the delivery
                  person and contact our Customer Service Team immediately with
                  your order number, details, and an image of the faulty items.
                </li>
              </ol>
            </li>
            <li>
              Outside Dhaka:
              <li className="list-inside list-disc ml-6">{`If the product is damaged, inform our Customer Service Team immediately with an image of the faulty items upon receiving and return the product within 2 days from the day it was received.`}</li>
            </li>
            <li>General Conditions:</li>
            <ol className="list-inside list-disc ml-6">
              <li>
                The item must be in its original purchase condition, with
                unopened packaging, unused, unmarked, and not defaced, unless
                there is shipping damage or a manufacturing defect.
              </li>
              <li>Used outfits are not eligible for exchange or refund.</li>
              <li>
                If the customer independently places an order and wishes to
                return/change the product (except damaged products), the request
                will not be accepted.
              </li>
              <li>
                ANZARA LIFESTYLE LTD will not cover the shipping cost for
                returns, except for damaged products or those with manufacturing
                defects.
              </li>
              <li>
                The original invoice must be returned along with the product.
              </li>
              <li>
                Items purchased as part of a set or multi-item pack must be
                returned as a complete set.
              </li>
              <li>
                This return policy does not apply to items explicitly stated as
                non-exchangeable or non-returnable.
              </li>
            </ol>
          </ol>
          <p>
            Verification Process: Upon receiving your returned product, it will
            be directed to the Product Quality Control Department. The
            verification process is anticipated to take 1-2 business days. After
            thorough examination, if the claim is substantiated and deemed
            valid, the product will be eligible for exchange, or a refund will
            be processed.
          </p>
          <p>
            In cases where the claim is not validated, ANZARA LIFESTYLE LTD will
            not be responsible for processing an exchange or refund.
          </p>
          <p className="text-lg font-semibold text-gray-700 mt-2">REFUND</p>
          <p>
            Cash On Delivery Refund Process: If you had initially paid for your
            product using Cash On Delivery, following the verification of your
            claim, we will initiate a refund through bKash or provide Festivibe
            Fashion store credit. This process ensures a timely and appropriate
            resolution to your refund request.
          </p>
          <p>
            bKash Refund Process: If your initial payment for the product was
            made through bKash, the refund will be processed directly to your
            bKash account. This ensures a streamlined and convenient refund
            procedure for your payment made via bKash.
          </p>
          <p>
            Online Payment Refund Process: If your initial payment was made
            through Credit/Debit Card, Internet Banking, or Mobile Payment, the
            refund will be issued to the same payment method you originally
            used. Please be aware that the refund will be processed to your
            bank/card and may take 7-10 days to complete. This ensures a secure
            and efficient refund procedure for payments made through online
            methods.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
