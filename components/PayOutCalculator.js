// components/PayoutCalculator.js
import { useState } from 'react';

const PayoutCalculator = ({ articles }) => {
    const [payoutPerArticle, setPayoutPerArticle] = useState(0);
    const totalPayout = articles.length * payoutPerArticle;

    return (
        <div>
            <h2>Payout Calculator</h2>
            <input
                type="number"
                value={payoutPerArticle}
                onChange={(e) => setPayoutPerArticle(e.target.value)}
                placeholder="Payout per article"
            />
            <p>Total Payout: ${totalPayout}</p>
        </div>
    );
};

export default PayoutCalculator;