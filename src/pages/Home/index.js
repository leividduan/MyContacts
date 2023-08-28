/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import { Container } from './styles';

import Loader from '../../components/Loader';

import useHome from './useHome';
import InputSearch from './components/InputSearch';
import Header from './components/Header';
import ErrorStatus from './components/ErrorStatus';
import EmptyList from './components/EmptyList';
import SearchNotFound from './components/SearchNotFound';
import ContactsList from './components/ContactsList';
import Modal from '../../components/Modal';


export default function Home() {
  const {
    isLoadingDelete,
    isDeleteModalVisible,
    contactBeingDeleted,
    handleCloseDeleteModal,
    handleConfirmDeleteContact,
    isLoading,
    searchTerm,
    handleChangeSearchTerm,
    hasError,
    contacts,
    handleTryAgain,
    filteredContacts,
    orderBy,
    handleToggleOrderBy,
    handleDeleteContact,
  } = useHome();

  const hasContacts = contacts.length > 0;
  const isListEmpty = !hasError && (!isLoading && !hasContacts);
  const isSearchEmpty = !hasError && (hasContacts && filteredContacts.length < 1);

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {hasContacts && (
        <InputSearch
          value={searchTerm}
          onChange={handleChangeSearchTerm}
        />
      )}

      <Header
        hasError={hasError}
        qtyOfContacts={contacts.length}
        qtyOfFilteredContacts={filteredContacts.length}
      />

      {hasError && <ErrorStatus onTryAgain={handleTryAgain} />}
      {isListEmpty && <EmptyList />}
      {isSearchEmpty && <SearchNotFound value={searchTerm} />}

      {hasContacts && (
        <>
          <ContactsList
            filteredContacts={filteredContacts}
            orderBy={orderBy}
            onToggleOrderBy={handleToggleOrderBy}
            onDeleteContact={handleDeleteContact}
          />

          <Modal
            danger
            isLoading={isLoadingDelete}
            visible={isDeleteModalVisible}
            title={`Tem certeza que deseja remover o contato "${contactBeingDeleted?.name}"?`}
            confirmLabel="Deletar"
            onCancel={handleCloseDeleteModal}
            onConfirm={handleConfirmDeleteContact}
          >
            <p>Esta ação não poderá ser desfeita!</p>
          </Modal>
        </>
      )}
    </Container>
  );
}
