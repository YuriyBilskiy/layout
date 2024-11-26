export const getStatusColor = (status) => {
    switch (status) {
      case "Open":
        return "bg-blue-500"; 
      case "Pending":
        return "bg-yellow-500"; 
      case "Rejected":
        return "bg-red-500"; 
    case "Accepted":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };