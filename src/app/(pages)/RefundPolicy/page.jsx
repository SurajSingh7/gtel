'use client';

import React from 'react';

const RefundPolicy = () => {
  return (
    <>
    <div className='h-40'></div>
    <div className="refund-policy  ml-10 mr-10">
      <h1 className="text-xl font-bold mb-4">Refund Policy</h1>
      <p className="mb-4">
        Gigantic does not entertain refunds for amounts paid by users for Monthly, Quarterly, Semi-Annual, or Annual subscriptions. Refunds are only considered in non-feasible cases. The refund process takes approximately 4-6 weeks.
      </p>
      <p className="mb-4">
        Gigantic follows TRAI/DOT Policy Guidelines for billing disputes. Users must submit formal concerns via email to <a href="mailto:support@gtel.in" className="text-blue-600 underline">support@gtel.in</a>. These issues will be addressed within 4-6 weeks, either through a discount or a credit note applied to the user’s account.
      </p>
      <p className="mb-4">
        In any situation where the user ID or internet connection is not renewed, a charge of INR 50 per month will be applied by “Gigantic Infotel Private Limited” until the complete disconnection process is finalized.
      </p>
      <p className="text-sm text-gray-600">
        For further queries, please reach out to us at <a href="mailto:support@gtel.in" className="text-blue-600 underline">support@gtel.in</a>.
      </p>
    </div>
    <div className='h-10'></div>
    </>
  );
};

export default RefundPolicy;
