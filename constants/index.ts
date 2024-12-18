// Contents: Constants used in the application
import {
    Utensils,      // Food
    Bus,           // Travel
    ShoppingCart,  // Grocery
    Stethoscope,   // Health
    Film,          // Entertainment
    Tags,          // Shopping
    GraduationCap, // Education
    MoreHorizontal // Others
  } from 'lucide-react-native';

const CONSTANTS = {
    DB: {
        NAME: "expense.db",
        TRANSACTIONS_TABLE: "transactions",
        CATEGORIES_TABLE: "categories"
    },
    CATEGORIES: [
        { name: "Food", icon: Utensils },
        { name: "Travel", icon: Bus },
        { name: "Grocery", icon: ShoppingCart },
        { name: "Health", icon: Stethoscope },
        { name: "Entertainment", icon: Film },
        { name: "Shopping", icon: Tags },
        { name: "Education", icon: GraduationCap },
        { name: "Others", icon: MoreHorizontal },
    ]

}

export default CONSTANTS;