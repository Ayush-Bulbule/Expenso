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
        { 
            name: "Food", 
            icon: <Utensils color={'#EF4444'} size={24}/>,
            backgroundColor: '#FEE2E2',
            color: '#EF4444'
        },
        { 
            name: "Travel", 
            icon: <Bus color={'#6366F1'} size={24}/>,
            backgroundColor: '#E0E7FF',
            color: '#6366F1'
        },
        { 
            name: "Grocery", 
            icon: <ShoppingCart color={'#10B981'} size={24}/>,
            backgroundColor: '#D1FAE5',
            color: '#10B981'
        },
        { 
            name: "Health", 
            icon: <Stethoscope color={'#F43F5E'} size={24}/>,
            backgroundColor: '#FFE4E6',
            color: '#F43F5E'
        },
        { 
            name: "Entertainment", 
            icon: <Film color={'#8B5CF6'} size={24}/>,
            backgroundColor: '#EDE9FE',
            color: '#8B5CF6'
        },
        { 
            name: "Shopping", 
            icon: <Tags color={'#F97316'} size={24}/>,
            backgroundColor: '#FFEDD5',
            color: '#F97316'
        },
        { 
            name: "Education", 
            icon: <GraduationCap color={'#3B82F6'} size={24}/>,
            backgroundColor: '#DBEAFE',
            color: '#3B82F6'
        },
        { 
            name: "Others", 
            icon: <MoreHorizontal color={'#6B7280'} size={24}/>,
            backgroundColor: '#F3F4F6',
            color: '#6B7280'
        },
    ]
}

export default CONSTANTS;