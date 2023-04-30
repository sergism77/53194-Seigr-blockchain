//this is the api for transactionReceipts

import axios from 'axios';

export const getTransactionReceipts = async () => {
    const response = await axios.get('/api/transactionReceipts');
    return response.data;
}

export const getTransactionReceipt = async (id) => {
    const response = await axios.get(`/api/transactionReceipts/${id}`);
    return response.data;
}

export const createTransactionReceipt = async (transactionReceipt) => {
    const response = await axios.post('/api/transactionReceipts', transactionReceipt);
    return response.data;
}

export const updateTransactionReceipt = async (transactionReceipt) => {
    const response = await axios.put(`/api/transactionReceipts/${transactionReceipt.id}`, transactionReceipt);
    return response.data;
}

export const deleteTransactionReceipt = async (id) => {
    const response = await axios.delete(`/api/transactionReceipts/${id}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionId = async (transactionId) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}`);
    return response.data;
}

export const getTransactionReceiptsByReceiptId = async (receiptId) => {
    const response = await axios.get(`/api/transactionReceipts/receipt/${receiptId}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdAndReceiptId = async (transactionId, receiptId) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}/receipt/${receiptId}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdAndReceiptIdAndAmount = async (transactionId, receiptId, amount) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}/receipt/${receiptId}/amount/${amount}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdAndReceiptIdAndAmountAndDate = async (transactionId, receiptId, amount, date) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}/receipt/${receiptId}/amount/${amount}/date/${date}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdAndReceiptIdAndAmountAndDateAndDescription = async (transactionId, receiptId, amount, date, description) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}/receipt/${receiptId}/amount/${amount}/date/${date}/description/${description}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdAndReceiptIdAndAmountAndDateAndDescriptionAndTransactionType = async (transactionId, receiptId, amount, date, description, transactionType) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}/receipt/${receiptId}/amount/${amount}/date/${date}/description/${description}/transactionType/${transactionType}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdAndReceiptIdAndAmountAndDateAndDescriptionAndTransactionTypeAndTransactionStatus = async (transactionId, receiptId, amount, date, description, transactionType, transactionStatus) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}/receipt/${receiptId}/amount/${amount}/date/${date}/description/${description}/transactionType/${transactionType}/transactionStatus/${transactionStatus}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdAndReceiptIdAndAmountAndDateAndDescriptionAndTransactionTypeAndTransactionStatusAndTransactionMethod = async (transactionId, receiptId, amount, date, description, transactionType, transactionStatus, transactionMethod) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}/receipt/${receiptId}/amount/${amount}/date/${date}/description/${description}/transactionType/${transactionType}/transactionStatus/${transactionStatus}/transactionMethod/${transactionMethod}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdAndReceiptIdAndAmountAndDateAndDescriptionAndTransactionTypeAndTransactionStatusAndTransactionMethodAndTransactionCategory = async (transactionId, receiptId, amount, date, description, transactionType, transactionStatus, transactionMethod, transactionCategory) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}/receipt/${receiptId}/amount/${amount}/date/${date}/description/${description}/transactionType/${transactionType}/transactionStatus/${transactionStatus}/transactionMethod/${transactionMethod}/transactionCategory/${transactionCategory}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdAndReceiptIdAndAmountAndDateAndDescriptionAndTransactionTypeAndTransactionStatusAndTransactionMethodAndTransactionCategoryAndTransactionSubcategory = async (transactionId, receiptId, amount, date, description, transactionType, transactionStatus, transactionMethod, transactionCategory, transactionSubcategory) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}/receipt/${receiptId}/amount/${amount}/date/${date}/description/${description}/transactionType/${transactionType}/transactionStatus/${transactionStatus}/transactionMethod/${transactionMethod}/transactionCategory/${transactionCategory}/transactionSubcategory/${transactionSubcategory}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdAndReceiptIdAndAmountAndDateAndDescriptionAndTransactionTypeAndTransactionStatusAndTransactionMethodAndTransactionCategoryAndTransactionSubcategoryAndTransactionAccount = async (transactionId, receiptId, amount, date, description, transactionType, transactionStatus, transactionMethod, transactionCategory, transactionSubcategory, transactionAccount) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}/receipt/${receiptId}/amount/${amount}/date/${date}/description/${description}/transactionType/${transactionType}/transactionStatus/${transactionStatus}/transactionMethod/${transactionMethod}/transactionCategory/${transactionCategory}/transactionSubcategory/${transactionSubcategory}/transactionAccount/${transactionAccount}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdAndReceiptIdAndAmountAndDateAndDescriptionAndTransactionTypeAndTransactionStatusAndTransactionMethodAndTransactionCategoryAndTransactionSubcategoryAndTransactionAccountAndTransactionBudget = async (transactionId, receiptId, amount, date, description, transactionType, transactionStatus, transactionMethod, transactionCategory, transactionSubcategory, transactionAccount, transactionBudget) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}/receipt/${receiptId}/amount/${amount}/date/${date}/description/${description}/transactionType/${transactionType}/transactionStatus/${transactionStatus}/transactionMethod/${transactionMethod}/transactionCategory/${transactionCategory}/transactionSubcategory/${transactionSubcategory}/transactionAccount/${transactionAccount}/transactionBudget/${transactionBudget}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdAndReceiptIdAndAmountAndDateAndDescriptionAndTransactionTypeAndTransactionStatusAndTransactionMethodAndTransactionCategoryAndTransactionSubcategoryAndTransactionAccountAndTransactionBudgetAndTransactionBill = async (transactionId, receiptId, amount, date, description, transactionType, transactionStatus, transactionMethod, transactionCategory, transactionSubcategory, transactionAccount, transactionBudget, transactionBill) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}/receipt/${receiptId}/amount/${amount}/date/${date}/description/${description}/transactionType/${transactionType}/transactionStatus/${transactionStatus}/transactionMethod/${transactionMethod}/transactionCategory/${transactionCategory}/transactionSubcategory/${transactionSubcategory}/transactionAccount/${transactionAccount}/transactionBudget/${transactionBudget}/transactionBill/${transactionBill}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdAndReceiptIdAndAmountAndDateAndDescriptionAndTransactionTypeAndTransactionStatusAndTransactionMethodAndTransactionCategoryAndTransactionSubcategoryAndTransactionAccountAndTransactionBudgetAndTransactionBillAndTransactionInvoice = async (transactionId, receiptId, amount, date, description, transactionType, transactionStatus, transactionMethod, transactionCategory, transactionSubcategory, transactionAccount, transactionBudget, transactionBill, transactionInvoice) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}/receipt/${receiptId}/amount/${amount}/date/${date}/description/${description}/transactionType/${transactionType}/transactionStatus/${transactionStatus}/transactionMethod/${transactionMethod}/transactionCategory/${transactionCategory}/transactionSubcategory/${transactionSubcategory}/transactionAccount/${transactionAccount}/transactionBudget/${transactionBudget}/transactionBill/${transactionBill}/transactionInvoice/${transactionInvoice}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdAndReceiptIdAndAmountAndDateAndDescriptionAndTransactionTypeAndTransactionStatusAndTransactionMethodAndTransactionCategoryAndTransactionSubcategoryAndTransactionAccountAndTransactionBudgetAndTransactionBillAndTransactionInvoiceAndTransactionRecurring = async (transactionId, receiptId, amount, date, description, transactionType, transactionStatus, transactionMethod, transactionCategory, transactionSubcategory, transactionAccount, transactionBudget, transactionBill, transactionInvoice, transactionRecurring) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}/receipt/${receiptId}/amount/${amount}/date/${date}/description/${description}/transactionType/${transactionType}/transactionStatus/${transactionStatus}/transactionMethod/${transactionMethod}/transactionCategory/${transactionCategory}/transactionSubcategory/${transactionSubcategory}/transactionAccount/${transactionAccount}/transactionBudget/${transactionBudget}/transactionBill/${transactionBill}/transactionInvoice/${transactionInvoice}/transactionRecurring/${transactionRecurring}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdAndReceiptIdAndAmountAndDateAndDescriptionAndTransactionTypeAndTransactionStatusAndTransactionMethodAndTransactionCategoryAndTransactionSubcategoryAndTransactionAccountAndTransactionBudgetAndTransactionBillAndTransactionInvoiceAndTransactionRecurringAndTransactionMileage = async (transactionId, receiptId, amount, date, description, transactionType, transactionStatus, transactionMethod, transactionCategory, transactionSubcategory, transactionAccount, transactionBudget, transactionBill, transactionInvoice, transactionRecurring, transactionMileage) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}/receipt/${receiptId}/amount/${amount}/date/${date}/description/${description}/transactionType/${transactionType}/transactionStatus/${transactionStatus}/transactionMethod/${transactionMethod}/transactionCategory/${transactionCategory}/transactionSubcategory/${transactionSubcategory}/transactionAccount/${transactionAccount}/transactionBudget/${transactionBudget}/transactionBill/${transactionBill}/transactionInvoice/${transactionInvoice}/transactionRecurring/${transactionRecurring}/transactionMileage/${transactionMileage}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdAndReceiptIdAndAmountAndDateAndDescriptionAndTransactionTypeAndTransactionStatusAndTransactionMethodAndTransactionCategoryAndTransactionSubcategoryAndTransactionAccountAndTransactionBudgetAndTransactionBillAndTransactionInvoiceAndTransactionRecurringAndTransactionMileageAndTransactionSplit = async (transactionId, receiptId, amount, date, description, transactionType, transactionStatus, transactionMethod, transactionCategory, transactionSubcategory, transactionAccount, transactionBudget, transactionBill, transactionInvoice, transactionRecurring, transactionMileage, transactionSplit) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}/receipt/${receiptId}/amount/${amount}/date/${date}/description/${description}/transactionType/${transactionType}/transactionStatus/${transactionStatus}/transactionMethod/${transactionMethod}/transactionCategory/${transactionCategory}/transactionSubcategory/${transactionSubcategory}/transactionAccount/${transactionAccount}/transactionBudget/${transactionBudget}/transactionBill/${transactionBill}/transactionInvoice/${transactionInvoice}/transactionRecurring/${transactionRecurring}/transactionMileage/${transactionMileage}/transactionSplit/${transactionSplit}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdAndReceiptIdAndAmountAndDateAndDescriptionAndTransactionTypeAndTransactionStatusAndTransactionMethodAndTransactionCategoryAndTransactionSubcategoryAndTransactionAccountAndTransactionBudgetAndTransactionBillAndTransactionInvoiceAndTransactionRecurringAndTransactionMileageAndTransactionSplitAndTransactionParent = async (transactionId, receiptId, amount, date, description, transactionType, transactionStatus, transactionMethod, transactionCategory, transactionSubcategory, transactionAccount, transactionBudget, transactionBill, transactionInvoice, transactionRecurring, transactionMileage, transactionSplit, transactionParent) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}/receipt/${receiptId}/amount/${amount}/date/${date}/description/${description}/transactionType/${transactionType}/transactionStatus/${transactionStatus}/transactionMethod/${transactionMethod}/transactionCategory/${transactionCategory}/transactionSubcategory/${transactionSubcategory}/transactionAccount/${transactionAccount}/transactionBudget/${transactionBudget}/transactionBill/${transactionBill}/transactionInvoice/${transactionInvoice}/transactionRecurring/${transactionRecurring}/transactionMileage/${transactionMileage}/transactionSplit/${transactionSplit}/transactionParent/${transactionParent}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdAndReceiptIdAndAmountAndDateAndDescriptionAndTransactionTypeAndTransactionStatusAndTransactionMethodAndTransactionCategoryAndTransactionSubcategoryAndTransactionAccountAndTransactionBudgetAndTransactionBillAndTransactionInvoiceAndTransactionRecurringAndTransactionMileageAndTransactionSplitAndTransactionParentAndTransactionChild = async (transactionId, receiptId, amount, date, description, transactionType, transactionStatus, transactionMethod, transactionCategory, transactionSubcategory, transactionAccount, transactionBudget, transactionBill, transactionInvoice, transactionRecurring, transactionMileage, transactionSplit, transactionParent, transactionChild) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}/receipt/${receiptId}/amount/${amount}/date/${date}/description/${description}/transactionType/${transactionType}/transactionStatus/${transactionStatus}/transactionMethod/${transactionMethod}/transactionCategory/${transactionCategory}/transactionSubcategory/${transactionSubcategory}/transactionAccount/${transactionAccount}/transactionBudget/${transactionBudget}/transactionBill/${transactionBill}/transactionInvoice/${transactionInvoice}/transactionRecurring/${transactionRecurring}/transactionMileage/${transactionMileage}/transactionSplit/${transactionSplit}/transactionParent/${transactionParent}/transactionChild/${transactionChild}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdAndReceiptIdAndAmountAndDateAndDescriptionAndTransactionTypeAndTransactionStatusAndTransactionMethodAndTransactionCategoryAndTransactionSubcategoryAndTransactionAccountAndTransactionBudgetAndTransactionBillAndTransactionInvoiceAndTransactionRecurringAndTransactionMileageAndTransactionSplitAndTransactionParentAndTransactionChildAndTransactionFlag = async (transactionId, receiptId, amount, date, description, transactionType, transactionStatus, transactionMethod, transactionCategory, transactionSubcategory, transactionAccount, transactionBudget, transactionBill, transactionInvoice, transactionRecurring, transactionMileage, transactionSplit, transactionParent, transactionChild, transactionFlag) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}/receipt/${receiptId}/amount/${amount}/date/${date}/description/${description}/transactionType/${transactionType}/transactionStatus/${transactionStatus}/transactionMethod/${transactionMethod}/transactionCategory/${transactionCategory}/transactionSubcategory/${transactionSubcategory}/transactionAccount/${transactionAccount}/transactionBudget/${transactionBudget}/transactionBill/${transactionBill}/transactionInvoice/${transactionInvoice}/transactionRecurring/${transactionRecurring}/transactionMileage/${transactionMileage}/transactionSplit/${transactionSplit}/transactionParent/${transactionParent}/transactionChild/${transactionChild}/transactionFlag/${transactionFlag}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdAndReceiptIdAndAmountAndDateAndDescriptionAndTransactionTypeAndTransactionStatusAndTransactionMethodAndTransactionCategoryAndTransactionSubcategoryAndTransactionAccountAndTransactionBudgetAndTransactionBillAndTransactionInvoiceAndTransactionRecurringAndTransactionMileageAndTransactionSplitAndTransactionParentAndTransactionChildAndTransactionFlagAndTransactionNote = async (transactionId, receiptId, amount, date, description, transactionType, transactionStatus, transactionMethod, transactionCategory, transactionSubcategory, transactionAccount, transactionBudget, transactionBill, transactionInvoice, transactionRecurring, transactionMileage, transactionSplit, transactionParent, transactionChild, transactionFlag, transactionNote) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}/receipt/${receiptId}/amount/${amount}/date/${date}/description/${description}/transactionType/${transactionType}/transactionStatus/${transactionStatus}/transactionMethod/${transactionMethod}/transactionCategory/${transactionCategory}/transactionSubcategory/${transactionSubcategory}/transactionAccount/${transactionAccount}/transactionBudget/${transactionBudget}/transactionBill/${transactionBill}/transactionInvoice/${transactionInvoice}/transactionRecurring/${transactionRecurring}/transactionMileage/${transactionMileage}/transactionSplit/${transactionSplit}/transactionParent/${transactionParent}/transactionChild/${transactionChild}/transactionFlag/${transactionFlag}/transactionNote/${transactionNote}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdAndReceiptIdAndAmountAndDateAndDescriptionAndTransactionTypeAndTransactionStatusAndTransactionMethodAndTransactionCategoryAndTransactionSubcategoryAndTransactionAccountAndTransactionBudgetAndTransactionBillAndTransactionInvoiceAndTransactionRecurringAndTransactionMileageAndTransactionSplitAndTransactionParentAndTransactionChildAndTransactionFlagAndTransactionNoteAndTransactionRead = async (transactionId, receiptId, amount, date, description, transactionType, transactionStatus, transactionMethod, transactionCategory, transactionSubcategory, transactionAccount, transactionBudget, transactionBill, transactionInvoice, transactionRecurring, transactionMileage, transactionSplit, transactionParent, transactionChild, transactionFlag, transactionNote, transactionRead) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}/receipt/${receiptId}/amount/${amount}/date/${date}/description/${description}/transactionType/${transactionType}/transactionStatus/${transactionStatus}/transactionMethod/${transactionMethod}/transactionCategory/${transactionCategory}/transactionSubcategory/${transactionSubcategory}/transactionAccount/${transactionAccount}/transactionBudget/${transactionBudget}/transactionBill/${transactionBill}/transactionInvoice/${transactionInvoice}/transactionRecurring/${transactionRecurring}/transactionMileage/${transactionMileage}/transactionSplit/${transactionSplit}/transactionParent/${transactionParent}/transactionChild/${transactionChild}/transactionFlag/${transactionFlag}/transactionNote/${transactionNote}/transactionRead/${transactionRead}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdAndReceiptIdAndAmountAndDateAndDescriptionAndTransactionTypeAndTransactionStatusAndTransactionMethodAndTransactionCategoryAndTransactionSubcategoryAndTransactionAccountAndTransactionBudgetAndTransactionBillAndTransactionInvoiceAndTransactionRecurringAndTransactionMileageAndTransactionSplitAndTransactionParentAndTransactionChildAndTransactionFlagAndTransactionNoteAndTransactionReadAndTransactionFavorite = async (transactionId, receiptId, amount, date, description, transactionType, transactionStatus, transactionMethod, transactionCategory, transactionSubcategory, transactionAccount, transactionBudget, transactionBill, transactionInvoice, transactionRecurring, transactionMileage, transactionSplit, transactionParent, transactionChild, transactionFlag, transactionNote, transactionRead, transactionFavorite) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}/receipt/${receiptId}/amount/${amount}/date/${date}/description/${description}/transactionType/${transactionType}/transactionStatus/${transactionStatus}/transactionMethod/${transactionMethod}/transactionCategory/${transactionCategory}/transactionSubcategory/${transactionSubcategory}/transactionAccount/${transactionAccount}/transactionBudget/${transactionBudget}/transactionBill/${transactionBill}/transactionInvoice/${transactionInvoice}/transactionRecurring/${transactionRecurring}/transactionMileage/${transactionMileage}/transactionSplit/${transactionSplit}/transactionParent/${transactionParent}/transactionChild/${transactionChild}/transactionFlag/${transactionFlag}/transactionNote/${transactionNote}/transactionRead/${transactionRead}/transactionFavorite/${transactionFavorite}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdAndReceiptIdAndAmountAndDateAndDescriptionAndTransactionTypeAndTransactionStatusAndTransactionMethodAndTransactionCategoryAndTransactionSubcategoryAndTransactionAccountAndTransactionBudgetAndTransactionBillAndTransactionInvoiceAndTransactionRecurringAndTransactionMileageAndTransactionSplitAndTransactionParentAndTransactionChildAndTransactionFlagAndTransactionNoteAndTransactionReadAndTransactionFavoriteAndTransactionAutomatic = async (transactionId, receiptId, amount, date, description, transactionType, transactionStatus, transactionMethod, transactionCategory, transactionSubcategory, transactionAccount, transactionBudget, transactionBill, transactionInvoice, transactionRecurring, transactionMileage, transactionSplit, transactionParent, transactionChild, transactionFlag, transactionNote, transactionRead, transactionFavorite, transactionAutomatic) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}/receipt/${receiptId}/amount/${amount}/date/${date}/description/${description}/transactionType/${transactionType}/transactionStatus/${transactionStatus}/transactionMethod/${transactionMethod}/transactionCategory/${transactionCategory}/transactionSubcategory/${transactionSubcategory}/transactionAccount/${transactionAccount}/transactionBudget/${transactionBudget}/transactionBill/${transactionBill}/transactionInvoice/${transactionInvoice}/transactionRecurring/${transactionRecurring}/transactionMileage/${transactionMileage}/transactionSplit/${transactionSplit}/transactionParent/${transactionParent}/transactionChild/${transactionChild}/transactionFlag/${transactionFlag}/transactionNote/${transactionNote}/transactionRead/${transactionRead}/transactionFavorite/${transactionFavorite}/transactionAutomatic/${transactionAutomatic}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdAndReceiptIdAndAmountAndDateAndDescriptionAndTransactionTypeAndTransactionStatusAndTransactionMethodAndTransactionCategoryAndTransactionSubcategoryAndTransactionAccountAndTransactionBudgetAndTransactionBillAndTransactionInvoiceAndTransactionRecurringAndTransactionMileageAndTransactionSplitAndTransactionParentAndTransactionChildAndTransactionFlagAndTransactionNoteAndTransactionReadAndTransactionFavoriteAndTransactionAutomaticAndTransactionDateCreated = async (transactionId, receiptId, amount, date, description, transactionType, transactionStatus, transactionMethod, transactionCategory, transactionSubcategory, transactionAccount, transactionBudget, transactionBill, transactionInvoice, transactionRecurring, transactionMileage, transactionSplit, transactionParent, transactionChild, transactionFlag, transactionNote, transactionRead, transactionFavorite, transactionAutomatic, transactionDateCreated) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}/receipt/${receiptId}/amount/${amount}/date/${date}/description/${description}/transactionType/${transactionType}/transactionStatus/${transactionStatus}/transactionMethod/${transactionMethod}/transactionCategory/${transactionCategory}/transactionSubcategory/${transactionSubcategory}/transactionAccount/${transactionAccount}/transactionBudget/${transactionBudget}/transactionBill/${transactionBill}/transactionInvoice/${transactionInvoice}/transactionRecurring/${transactionRecurring}/transactionMileage/${transactionMileage}/transactionSplit/${transactionSplit}/transactionParent/${transactionParent}/transactionChild/${transactionChild}/transactionFlag/${transactionFlag}/transactionNote/${transactionNote}/transactionRead/${transactionRead}/transactionFavorite/${transactionFavorite}/transactionAutomatic/${transactionAutomatic}/transactionDateCreated/${transactionDateCreated}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdAndReceiptIdAndAmountAndDateAndDescriptionAndTransactionTypeAndTransactionStatusAndTransactionMethodAndTransactionCategoryAndTransactionSubcategoryAndTransactionAccountAndTransactionBudgetAndTransactionBillAndTransactionInvoiceAndTransactionRecurringAndTransactionMileageAndTransactionSplitAndTransactionParentAndTransactionChildAndTransactionFlagAndTransactionNoteAndTransactionReadAndTransactionFavoriteAndTransactionAutomaticAndTransactionDateCreatedAndTransactionDateModifiedIsNull = async (transactionId, receiptId, amount, date, description, transactionType, transactionStatus, transactionMethod, transactionCategory, transactionSubcategory, transactionAccount, transactionBudget, transactionBill, transactionInvoice, transactionRecurring, transactionMileage, transactionSplit, transactionParent, transactionChild, transactionFlag, transactionNote, transactionRead, transactionFavorite, transactionAutomatic, transactionDateCreated) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}/receipt/${receiptId}/amount/${amount}/date/${date}/description/${description}/transactionType/${transactionType}/transactionStatus/${transactionStatus}/transactionMethod/${transactionMethod}/transactionCategory/${transactionCategory}/transactionSubcategory/${transactionSubcategory}/transactionAccount/${transactionAccount}/transactionBudget/${transactionBudget}/transactionBill/${transactionBill}/transactionInvoice/${transactionInvoice}/transactionRecurring/${transactionRecurring}/transactionMileage/${transactionMileage}/transactionSplit/${transactionSplit}/transactionParent/${transactionParent}/transactionChild/${transactionChild}/transactionFlag/${transactionFlag}/transactionNote/${transactionNote}/transactionRead/${transactionRead}/transactionFavorite/${transactionFavorite}/transactionAutomatic/${transactionAutomatic}/transactionDateCreated/${transactionDateCreated}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdAndReceiptIdAndAmountAndDateAndDescriptionAndTransactionTypeAndTransactionStatusAndTransactionMethodAndTransactionCategoryAndTransactionSubcategoryAndTransactionAccountAndTransactionBudgetAndTransactionBillAndTransactionInvoiceAndTransactionRecurringAndTransactionMileageAndTransactionSplitAndTransactionParentAndTransactionChildAndTransactionFlagAndTransactionNoteAndTransactionReadAndTransactionFavoriteAndTransactionAutomaticAndTransactionDateCreatedAndTransactionDateModifiedIsNotNull = async (transactionId, receiptId, amount, date, description, transactionType, transactionStatus, transactionMethod, transactionCategory, transactionSubcategory, transactionAccount, transactionBudget, transactionBill, transactionInvoice, transactionRecurring, transactionMileage, transactionSplit, transactionParent, transactionChild, transactionFlag, transactionNote, transactionRead, transactionFavorite, transactionAutomatic, transactionDateCreated) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}/receipt/${receiptId}/amount/${amount}/date/${date}/description/${description}/transactionType/${transactionType}/transactionStatus/${transactionStatus}/transactionMethod/${transactionMethod}/transactionCategory/${transactionCategory}/transactionSubcategory/${transactionSubcategory}/transactionAccount/${transactionAccount}/transactionBudget/${transactionBudget}/transactionBill/${transactionBill}/transactionInvoice/${transactionInvoice}/transactionRecurring/${transactionRecurring}/transactionMileage/${transactionMileage}/transactionSplit/${transactionSplit}/transactionParent/${transactionParent}/transactionChild/${transactionChild}/transactionFlag/${transactionFlag}/transactionNote/${transactionNote}/transactionRead/${transactionRead}/transactionFavorite/${transactionFavorite}/transactionAutomatic/${transactionAutomatic}/transactionDateCreated/${transactionDateCreated}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdAndReceiptIdAndAmountAndDateAndDescriptionAndTransactionTypeAndTransactionStatusAndTransactionMethodAndTransactionCategoryAndTransactionSubcategoryAndTransactionAccountAndTransactionBudgetAndTransactionBillAndTransactionInvoiceAndTransactionRecurringAndTransactionMileageAndTransactionSplitAndTransactionParentAndTransactionChildAndTransactionFlagAndTransactionNoteAndTransactionReadAndTransactionFavoriteAndTransactionAutomaticAndTransactionDateModified = async (transactionId, receiptId, amount, date, description, transactionType, transactionStatus, transactionMethod, transactionCategory, transactionSubcategory, transactionAccount, transactionBudget, transactionBill, transactionInvoice, transactionRecurring, transactionMileage, transactionSplit, transactionParent, transactionChild, transactionFlag, transactionNote, transactionRead, transactionFavorite, transactionAutomatic, transactionDateModified) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}/receipt/${receiptId}/amount/${amount}/date/${date}/description/${description}/transactionType/${transactionType}/transactionStatus/${transactionStatus}/transactionMethod/${transactionMethod}/transactionCategory/${transactionCategory}/transactionSubcategory/${transactionSubcategory}/transactionAccount/${transactionAccount}/transactionBudget/${transactionBudget}/transactionBill/${transactionBill}/transactionInvoice/${transactionInvoice}/transactionRecurring/${transactionRecurring}/transactionMileage/${transactionMileage}/transactionSplit/${transactionSplit}/transactionParent/${transactionParent}/transactionChild/${transactionChild}/transactionFlag/${transactionFlag}/transactionNote/${transactionNote}/transactionRead/${transactionRead}/transactionFavorite/${transactionFavorite}/transactionAutomatic/${transactionAutomatic}/transactionDateModified/${transactionDateModified}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdAndReceiptIdAndAmountAndDateAndDescriptionAndTransactionTypeAndTransactionStatusAndTransactionMethodAndTransactionCategoryAndTransactionSubcategoryAndTransactionAccountAndTransactionBudgetAndTransactionBillAndTransactionInvoiceAndTransactionRecurringAndTransactionMileageAndTransactionSplitAndTransactionParentAndTransactionChildAndTransactionFlagAndTransactionNoteAndTransactionReadAndTransactionFavoriteAndTransactionAutomaticAndTransactionDateModifiedIsNull = async (transactionId, receiptId, amount, date, description, transactionType, transactionStatus, transactionMethod, transactionCategory, transactionSubcategory, transactionAccount, transactionBudget, transactionBill, transactionInvoice, transactionRecurring, transactionMileage, transactionSplit, transactionParent, transactionChild, transactionFlag, transactionNote, transactionRead, transactionFavorite, transactionAutomatic, transactionDateModified) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}/receipt/${receiptId}/amount/${amount}/date/${date}/description/${description}/transactionType/${transactionType}/transactionStatus/${transactionStatus}/transactionMethod/${transactionMethod}/transactionCategory/${transactionCategory}/transactionSubcategory/${transactionSubcategory}/transactionAccount/${transactionAccount}/transactionBudget/${transactionBudget}/transactionBill/${transactionBill}/transactionInvoice/${transactionInvoice}/transactionRecurring/${transactionRecurring}/transactionMileage/${transactionMileage}/transactionSplit/${transactionSplit}/transactionParent/${transactionParent}/transactionChild/${transactionChild}/transactionFlag/${transactionFlag}/transactionNote/${transactionNote}/transactionRead/${transactionRead}/transactionFavorite/${transactionFavorite}/transactionAutomatic/${transactionAutomatic}/transactionDateModified/${transactionDateModified}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdAndReceiptIdAndAmountAndDateAndDescriptionAndTransactionTypeAndTransactionStatusAndTransactionMethodAndTransactionCategoryAndTransactionSubcategoryAndTransactionAccountAndTransactionBudgetAndTransactionBillAndTransactionInvoiceAndTransactionRecurringAndTransactionMileageAndTransactionSplitAndTransactionParentAndTransactionChildAndTransactionFlagAndTransactionNoteAndTransactionReadAndTransactionFavoriteAndTransactionAutomaticAndTransactionDateModifiedIsNotNull = async (transactionId, receiptId, amount, date, description, transactionType, transactionStatus, transactionMethod, transactionCategory, transactionSubcategory, transactionAccount, transactionBudget, transactionBill, transactionInvoice, transactionRecurring, transactionMileage, transactionSplit, transactionParent, transactionChild, transactionFlag, transactionNote, transactionRead, transactionFavorite, transactionAutomatic, transactionDateModified) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}/receipt/${receiptId}/amount/${amount}/date/${date}/description/${description}/transactionType/${transactionType}/transactionStatus/${transactionStatus}/transactionMethod/${transactionMethod}/transactionCategory/${transactionCategory}/transactionSubcategory/${transactionSubcategory}/transactionAccount/${transactionAccount}/transactionBudget/${transactionBudget}/transactionBill/${transactionBill}/transactionInvoice/${transactionInvoice}/transactionRecurring/${transactionRecurring}/transactionMileage/${transactionMileage}/transactionSplit/${transactionSplit}/transactionParent/${transactionParent}/transactionChild/${transactionChild}/transactionFlag/${transactionFlag}/transactionNote/${transactionNote}/transactionRead/${transactionRead}/transactionFavorite/${transactionFavorite}/transactionAutomatic/${transactionAutomatic}/transactionDateModified/${transactionDateModified}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdAndReceiptIdAndAmountAndDateAndDescriptionAndTransactionTypeAndTransactionStatusAndTransactionMethodAndTransactionCategoryAndTransactionSubcategoryAndTransactionAccountAndTransactionBudgetAndTransactionBillAndTransactionInvoiceAndTransactionRecurringAndTransactionMileageAndTransactionSplitAndTransactionParentAndTransactionChildAndTransactionFlagAndTransactionNoteIsNotNull = async (transactionId, receiptId, amount, date, description, transactionType, transactionStatus, transactionMethod, transactionCategory, transactionSubcategory, transactionAccount, transactionBudget, transactionBill, transactionInvoice, transactionRecurring, transactionMileage, transactionSplit, transactionParent, transactionChild, transactionFlag, transactionNote) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}/receipt/${receiptId}/amount/${amount}/date/${date}/description/${description}/transactionType/${transactionType}/transactionStatus/${transactionStatus}/transactionMethod/${transactionMethod}/transactionCategory/${transactionCategory}/transactionSubcategory/${transactionSubcategory}/transactionAccount/${transactionAccount}/transactionBudget/${transactionBudget}/transactionBill/${transactionBill}/transactionInvoice/${transactionInvoice}/transactionRecurring/${transactionRecurring}/transactionMileage/${transactionMileage}/transactionSplit/${transactionSplit}/transactionParent/${transactionParent}/transactionChild/${transactionChild}/transactionFlag/${transactionFlag}/transactionNoteIsNotNull/${transactionNote}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdAndReceiptIdAndAmountAndDateAndDescriptionAndTransactionTypeAndTransactionStatusAndTransactionMethodAndTransactionCategoryAndTransactionSubcategoryAndTransactionAccountAndTransactionBudgetAndTransactionBillAndTransactionInvoiceAndTransactionRecurringAndTransactionMileageAndTransactionSplitAndTransactionParentAndTransactionChildIsNotNull = async (transactionId, receiptId, amount, date, description, transactionType, transactionStatus, transactionMethod, transactionCategory, transactionSubcategory, transactionAccount, transactionBudget, transactionBill, transactionInvoice, transactionRecurring, transactionMileage, transactionSplit, transactionParent, transactionChild) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}/receipt/${receiptId}/amount/${amount}/date/${date}/description/${description}/transactionType/${transactionType}/transactionStatus/${transactionStatus}/transactionMethod/${transactionMethod}/transactionCategory/${transactionCategory}/transactionSubcategory/${transactionSubcategory}/transactionAccount/${transactionAccount}/transactionBudget/${transactionBudget}/transactionBill/${transactionBill}/transactionInvoice/${transactionInvoice}/transactionRecurring/${transactionRecurring}/transactionMileage/${transactionMileage}/transactionSplit/${transactionSplit}/transactionParent/${transactionParent}/transactionChildIsNotNull/${transactionChild}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdAndReceiptIdAndAmountAndDateAndDescriptionAndTransactionTypeAndTransactionStatusAndTransactionMethodAndTransactionCategoryAndTransactionSubcategoryAndTransactionAccountAndTransactionBudgetAndTransactionBillAndTransactionInvoiceAndTransactionRecurringAndTransactionMileageAndTransactionSplitAndTransactionParentIsNotNull = async (transactionId, receiptId, amount, date, description, transactionType, transactionStatus, transactionMethod, transactionCategory, transactionSubcategory, transactionAccount, transactionBudget, transactionBill, transactionInvoice, transactionRecurring, transactionMileage, transactionSplit, transactionParent) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}/receipt/${receiptId}/amount/${amount}/date/${date}/description/${description}/transactionType/${transactionType}/transactionStatus/${transactionStatus}/transactionMethod/${transactionMethod}/transactionCategory/${transactionCategory}/transactionSubcategory/${transactionSubcategory}/transactionAccount/${transactionAccount}/transactionBudget/${transactionBudget}/transactionBill/${transactionBill}/transactionInvoice/${transactionInvoice}/transactionRecurring/${transactionRecurring}/transactionMileage/${transactionMileage}/transactionSplit/${transactionSplit}/transactionParentIsNotNull/${transactionParent}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdAndReceiptIdAndAmountAndDateAndDescriptionAndTransactionTypeAndTransactionStatusAndTransactionMethodAndTransactionCategoryAndTransactionSubcategoryAndTransactionAccountAndTransactionBudgetAndTransactionBillAndTransactionInvoiceAndTransactionRecurringAndTransactionMileageAndTransactionSplitIsNotNull = async (transactionId, receiptId, amount, date, description, transactionType, transactionStatus, transactionMethod, transactionCategory, transactionSubcategory, transactionAccount, transactionBudget, transactionBill, transactionInvoice, transactionRecurring, transactionMileage, transactionSplit) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}/receipt/${receiptId}/amount/${amount}/date/${date}/description/${description}/transactionType/${transactionType}/transactionStatus/${transactionStatus}/transactionMethod/${transactionMethod}/transactionCategory/${transactionCategory}/transactionSubcategory/${transactionSubcategory}/transactionAccount/${transactionAccount}/transactionBudget/${transactionBudget}/transactionBill/${transactionBill}/transactionInvoice/${transactionInvoice}/transactionRecurring/${transactionRecurring}/transactionMileage/${transactionMileage}/transactionSplitIsNotNull/${transactionSplit}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdAndReceiptIdAndAmountAndDateAndDescriptionAndTransactionTypeAndTransactionStatusAndTransactionMethodAndTransactionCategoryAndTransactionSubcategoryAndTransactionAccountAndTransactionBudgetAndTransactionBillAndTransactionInvoiceAndTransactionRecurringAndTransactionMileageIsNotNull = async (transactionId, receiptId, amount, date, description, transactionType, transactionStatus, transactionMethod, transactionCategory, transactionSubcategory, transactionAccount, transactionBudget, transactionBill, transactionInvoice, transactionRecurring, transactionMileage) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}/receipt/${receiptId}/amount/${amount}/date/${date}/description/${description}/transactionType/${transactionType}/transactionStatus/${transactionStatus}/transactionMethod/${transactionMethod}/transactionCategory/${transactionCategory}/transactionSubcategory/${transactionSubcategory}/transactionAccount/${transactionAccount}/transactionBudget/${transactionBudget}/transactionBill/${transactionBill}/transactionInvoice/${transactionInvoice}/transactionRecurring/${transactionRecurring}/transactionMileageIsNotNull/${transactionMileage}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdAndReceiptIdAndAmountAndDateAndDescriptionAndTransactionTypeAndTransactionStatusAndTransactionMethodAndTransactionCategoryAndTransactionSubcategoryAndTransactionAccountAndTransactionBudgetAndTransactionBillAndTransactionInvoiceAndTransactionRecurringIsNotNull = async (transactionId, receiptId, amount, date, description, transactionType, transactionStatus, transactionMethod, transactionCategory, transactionSubcategory, transactionAccount, transactionBudget, transactionBill, transactionInvoice, transactionRecurring) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}/receipt/${receiptId}/amount/${amount}/date/${date}/description/${description}/transactionType/${transactionType}/transactionStatus/${transactionStatus}/transactionMethod/${transactionMethod}/transactionCategory/${transactionCategory}/transactionSubcategory/${transactionSubcategory}/transactionAccount/${transactionAccount}/transactionBudget/${transactionBudget}/transactionBill/${transactionBill}/transactionInvoice/${transactionInvoice}/transactionRecurringIsNotNull/${transactionRecurring}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdAndReceiptIdAndAmountAndDateAndDescriptionAndTransactionTypeAndTransactionStatusAndTransactionMethodAndTransactionCategoryAndTransactionSubcategoryAndTransactionAccountAndTransactionBudgetAndTransactionBillAndTransactionInvoiceIsNotNull = async (transactionId, receiptId, amount, date, description, transactionType, transactionStatus, transactionMethod, transactionCategory, transactionSubcategory, transactionAccount, transactionBudget, transactionBill, transactionInvoice) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}/receipt/${receiptId}/amount/${amount}/date/${date}/description/${description}/transactionType/${transactionType}/transactionStatus/${transactionStatus}/transactionMethod/${transactionMethod}/transactionCategory/${transactionCategory}/transactionSubcategory/${transactionSubcategory}/transactionAccount/${transactionAccount}/transactionBudget/${transactionBudget}/transactionBill/${transactionBill}/transactionInvoiceIsNotNull/${transactionInvoice}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdAndReceiptIdAndAmountAndDateAndDescriptionAndTransactionTypeAndTransactionStatusAndTransactionMethodAndTransactionCategoryAndTransactionSubcategoryAndTransactionAccountAndTransactionBudgetAndTransactionBillIsNotNull = async (transactionId, receiptId, amount, date, description, transactionType, transactionStatus, transactionMethod, transactionCategory, transactionSubcategory, transactionAccount, transactionBudget, transactionBill) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}/receipt/${receiptId}/amount/${amount}/date/${date}/description/${description}/transactionType/${transactionType}/transactionStatus/${transactionStatus}/transactionMethod/${transactionMethod}/transactionCategory/${transactionCategory}/transactionSubcategory/${transactionSubcategory}/transactionAccount/${transactionAccount}/transactionBudget/${transactionBudget}/transactionBillIsNotNull/${transactionBill}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdAndReceiptIdAndAmountAndDateAndDescriptionAndTransactionTypeAndTransactionStatusAndTransactionMethodAndTransactionCategoryAndTransactionSubcategoryAndTransactionAccountAndTransactionBudgetIsNotNull = async (transactionId, receiptId, amount, date, description, transactionType, transactionStatus, transactionMethod, transactionCategory, transactionSubcategory, transactionAccount, transactionBudget) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}/receipt/${receiptId}/amount/${amount}/date/${date}/description/${description}/transactionType/${transactionType}/transactionStatus/${transactionStatus}/transactionMethod/${transactionMethod}/transactionCategory/${transactionCategory}/transactionSubcategory/${transactionSubcategory}/transactionAccount/${transactionAccount}/transactionBudgetIsNotNull/${transactionBudget}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdAndReceiptIdAndAmountAndDateAndDescriptionAndTransactionTypeAndTransactionStatusAndTransactionMethodAndTransactionCategoryAndTransactionSubcategoryAndTransactionAccountIsNotNull = async (transactionId, receiptId, amount, date, description, transactionType, transactionStatus, transactionMethod, transactionCategory, transactionSubcategory, transactionAccount) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}/receipt/${receiptId}/amount/${amount}/date/${date}/description/${description}/transactionType/${transactionType}/transactionStatus/${transactionStatus}/transactionMethod/${transactionMethod}/transactionCategory/${transactionCategory}/transactionSubcategory/${transactionSubcategory}/transactionAccountIsNotNull/${transactionAccount}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdAndReceiptIdAndAmountAndDateAndDescriptionAndTransactionTypeAndTransactionStatusAndTransactionMethodAndTransactionCategoryAndTransactionSubcategoryIsNotNull = async (transactionId, receiptId, amount, date, description, transactionType, transactionStatus, transactionMethod, transactionCategory, transactionSubcategory) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}/receipt/${receiptId}/amount/${amount}/date/${date}/description/${description}/transactionType/${transactionType}/transactionStatus/${transactionStatus}/transactionMethod/${transactionMethod}/transactionCategory/${transactionCategory}/transactionSubcategoryIsNotNull/${transactionSubcategory}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdAndReceiptIdAndAmountAndDateAndDescriptionAndTransactionTypeAndTransactionStatusAndTransactionMethodAndTransactionCategoryIsNotNull = async (transactionId, receiptId, amount, date, description, transactionType, transactionStatus, transactionMethod, transactionCategory) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}/receipt/${receiptId}/amount/${amount}/date/${date}/description/${description}/transactionType/${transactionType}/transactionStatus/${transactionStatus}/transactionMethod/${transactionMethod}/transactionCategoryIsNotNull/${transactionCategory}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdAndReceiptIdAndAmountAndDateAndDescriptionAndTransactionTypeAndTransactionStatusAndTransactionMethodIsNotNull = async (transactionId, receiptId, amount, date, description, transactionType, transactionStatus, transactionMethod) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}/receipt/${receiptId}/amount/${amount}/date/${date}/description/${description}/transactionType/${transactionType}/transactionStatus/${transactionStatus}/transactionMethodIsNotNull/${transactionMethod}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdAndReceiptIdAndAmountAndDateAndDescriptionAndTransactionTypeAndTransactionStatusIsNotNull = async (transactionId, receiptId, amount, date, description, transactionType, transactionStatus) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}/receipt/${receiptId}/amount/${amount}/date/${date}/description/${description}/transactionType/${transactionType}/transactionStatusIsNotNull/${transactionStatus}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdAndReceiptIdAndAmountAndDateAndDescriptionAndTransactionTypeIsNotNull = async (transactionId, receiptId, amount, date, description, transactionType) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}/receipt/${receiptId}/amount/${amount}/date/${date}/description/${description}/transactionTypeIsNotNull/${transactionType}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdAndReceiptIdAndAmountAndDateAndDescriptionIsNotNull = async (transactionId, receiptId, amount, date, description) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}/receipt/${receiptId}/amount/${amount}/date/${date}/descriptionIsNotNull/${description}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdAndReceiptIdAndAmountAndDateIsNotNull = async (transactionId, receiptId, amount, date) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}/receipt/${receiptId}/amount/${amount}/dateIsNotNull/${date}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdAndReceiptIdAndAmountIsNotNull = async (transactionId, receiptId, amount) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}/receipt/${receiptId}/amountIsNotNull/${amount}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdAndReceiptIdIsNotNull = async (transactionId, receiptId) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}/receiptIsNotNull/${receiptId}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdIsNotNull = async (transactionId) => {
    const response = await axios.get(`/api/transactionReceipts/transactionIsNotNull/${transactionId}`);
    return response.data;
}

export const getTransactionReceiptsByReceiptIdIsNotNull = async (receiptId) => {
    const response = await axios.get(`/api/transactionReceipts/receiptIsNotNull/${receiptId}`);
    return response.data;
}

export const getTransactionReceiptsByAmountIsNotNull = async (amount) => {
    const response = await axios.get(`/api/transactionReceipts/amountIsNotNull/${amount}`);
    return response.data;
}

export const getTransactionReceiptsByDateIsNotNull = async (date) => {
    const response = await axios.get(`/api/transactionReceipts/dateIsNotNull/${date}`);
    return response.data;
}

export const getTransactionReceiptsByDescriptionIsNotNull = async (description) => {
    const response = await axios.get(`/api/transactionReceipts/descriptionIsNotNull/${description}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionTypeIsNotNull = async (transactionType) => {
    const response = await axios.get(`/api/transactionReceipts/transactionTypeIsNotNull/${transactionType}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionStatusIsNotNull = async (transactionStatus) => {
    const response = await axios.get(`/api/transactionReceipts/transactionStatusIsNotNull/${transactionStatus}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionMethodIsNotNull = async (transactionMethod) => {
    const response = await axios.get(`/api/transactionReceipts/transactionMethodIsNotNull/${transactionMethod}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionCategoryIsNotNull = async (transactionCategory) => {
    const response = await axios.get(`/api/transactionReceipts/transactionCategoryIsNotNull/${transactionCategory}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionSubcategoryIsNotNull = async (transactionSubcategory) => {
    const response = await axios.get(`/api/transactionReceipts/transactionSubcategoryIsNotNull/${transactionSubcategory}`);
    return response.data;
}

export const getTransactionReceiptsByTransactionIdAndReceiptIdAndAmountAndDateAndDescriptionAndTransactionTypeAndTransactionStatusAndTransactionMethodAndTransactionSubcategoryIsNotNull = async (transactionId, receiptId, amount, date, description, transactionType, transactionStatus, transactionMethod, transactionSubcategory) => {
    const response = await axios.get(`/api/transactionReceipts/transaction/${transactionId}/receipt/${receiptId}/amount/${amount}/date/${date}/description/${description}/transactionType/${transactionType}/transactionStatus/${transactionStatus}/transactionMethod/${transactionMethod}/transactionSubcategoryIsNotNull/${transactionSubcategory}`);
    return response.data;
}

