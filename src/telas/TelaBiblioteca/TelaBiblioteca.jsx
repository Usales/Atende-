import { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import '../TelaInicial/TelaInicial.css';
import '../TelaOperacional/TelaOperacional.css';
import './TelaBiblioteca.css';

function TelaBiblioteca() {
  const [search, setSearch] = useState('');
  const [showAdicionarModal, setShowAdicionarModal] = useState(false);
  const [texto, setTexto] = useState('');
  const [conteudoDetalhado, setConteudoDetalhado] = useState('');
  const [descricao, setDescricao] = useState('');
  const [incluirRespostas, setIncluirRespostas] = useState(false);
  const [textoRespostas, setTextoRespostas] = useState('');
  const [botoesDownload, setBotoesDownload] = useState([]);
  const [imagens, setImagens] = useState([]);
  const [itensBase, setItensBase] = useState([]);
  const [expandedItemId, setExpandedItemId] = useState(null);
  const fileInputRef = useRef(null);
  const downloadFileInputRef = useRef(null);

  const handleToggleExpand = (id) => {
    setExpandedItemId(prev => prev === id ? null : id);
  };

  const formatItemContent = (item) => {
    const parts = [];
    if (item.conteudoDetalhado) parts.push(item.conteudoDetalhado);
    if (item.descricao) parts.push(item.descricao);
    if (item.textoRespostas) parts.push(`Respostas:\n${item.textoRespostas}`);
    if (item.imagens?.length) {
      parts.push(`📷 Imagens: ${item.imagens.map(i => i.name).join(', ')}`);
    }
    return parts.join('\n\n');
  };

  const handleCopyToClipboard = (text, label) => {
    if (!text?.trim()) return;
    navigator.clipboard.writeText(text).then(() => {
      /* opcional: toast "Copiado!" */
    }).catch(() => {});
  };

  const handleAddBotaoDownload = () => {
    downloadFileInputRef.current?.click();
  };

  const handleDownloadFileChange = (e) => {
    const files = Array.from(e.target.files || []);
    files.forEach((file) => {
      const baseName = file.name.replace(/\.[^/.]+$/, '') || file.name;
      setBotoesDownload(prev => [...prev, { id: Date.now() + Math.random(), label: baseName, fileName: file.name, file }]);
    });
    e.target.value = '';
  };

  const handleRemoveBotaoDownload = (id) => {
    setBotoesDownload(prev => prev.filter(b => b.id !== id));
  };
  const location = useLocation();
  const baseTitle = location.state?.title ?? 'Biblioteca';
  const baseDescription = location.state?.description ?? '';

  const handleClearSearch = () => setSearch('');
  const handleSearch = () => { /* busca na base - futuro */ };

  const handleOpenAdicionarModal = () => setShowAdicionarModal(true);

  const handleCloseAdicionarModal = () => {
    setShowAdicionarModal(false);
    setTexto('');
    setConteudoDetalhado('');
    setDescricao('');
    setIncluirRespostas(false);
    setTextoRespostas('');
    setBotoesDownload([]);
    setImagens([]);
  };

  const handleAdicionar = (e) => {
    e.preventDefault();
    const novoItem = {
      id: Date.now(),
      texto: texto.trim(),
      conteudoDetalhado: conteudoDetalhado.trim(),
      descricao: descricao.trim(),
      textoRespostas: incluirRespostas ? textoRespostas.trim() : '',
      botoesDownload: botoesDownload.map(({ id, label, fileName }) => ({ id, label, fileName })),
      imagens: imagens.map(img => ({ name: img.name }))
    };
    setItensBase(prev => [novoItem, ...prev]);
    handleCloseAdicionarModal();
  };

  const handleAdicionarImagem = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    setImagens(prev => [...prev, ...files.map(f => ({ name: f.name, file: f }))]);
    e.target.value = '';
  };

  const handleRemoverImagem = (index) => {
    setImagens(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="tela-biblioteca">
      <section className="search-section animate-slide-down">
        <div className="search-container">
          <div className="search-input-wrapper">
            <input
              type="text"
              placeholder="Digite sua dúvida ou palavra-chave..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
            />
            {search && (
              <button
                type="button"
                onClick={handleClearSearch}
                className="clear-button"
                title="Limpar busca"
              >
                ✕
              </button>
            )}
          </div>
          <button type="button" onClick={handleSearch} className="search-button">
            Buscar
          </button>
        </div>
      </section>

      <div className="biblioteca-cards-wrapper">
        {itensBase.map((item) => (
          <article
            key={item.id}
            className={`biblioteca-item-card operacional-card ${expandedItemId === item.id ? 'expanded' : ''}`}
            aria-label={`${item.texto}${item.descricao ? ` - ${item.descricao}` : ''}`}
          >
            <div className="operacional-main">
              <div className="operacional-content">
                <div className="operacional-header-card">
                  <h3 className="operacional-title">{item.texto}</h3>
                </div>
                <p className="operacional-description">
                  {item.descricao || 'Sem descrição'}
                </p>
              </div>
              <div className="operacional-actions">
                <button
                  type="button"
                  className="eye-button"
                  onClick={() => handleToggleExpand(item.id)}
                  title="Visualizar detalhes"
                  aria-label="Visualizar detalhes"
                >
                  <span className="eye-icon">👁️</span>
                </button>
              </div>
            </div>
            {expandedItemId === item.id && (
              <div className="operacional-expanded">
                <div className="biblioteca-expanded-actions">
                  {item.textoRespostas && (
                    <button type="button" className="modal-btn modal-btn-secondary biblioteca-btn-copy" onClick={() => handleCopyToClipboard(item.textoRespostas, 'respostas')}>
                      📋 Copiar respostas
                    </button>
                  )}
                  {item.botoesDownload?.length > 0 && (
                    <div className="biblioteca-download-buttons-inline">
                      {item.botoesDownload.map((b) => (
                        <button key={b.id} type="button" className="modal-btn modal-btn-secondary biblioteca-btn-download-item" title={b.fileName}>
                          📥 {b.label || b.fileName}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <div className="info-preview">
                  <h5>Informações detalhadas:</h5>
                  <div className="preview-content">
                    <pre>{formatItemContent(item)}</pre>
                  </div>
                </div>
              </div>
            )}
          </article>
        ))}
        <div
          className="biblioteca-content"
          role="button"
          tabIndex={0}
          onClick={handleOpenAdicionarModal}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleOpenAdicionarModal(); } }}
          aria-label={`Conteúdo da base ${baseTitle}. Clique para adicionar conteúdo`}
        >
          <button type="button" className="biblioteca-add-btn" aria-label="Criar sua base">
            +
          </button>
          <p className="biblioteca-empty-message">Crie sua base</p>
        </div>
      </div>

      {/* Modal Adicionar à base */}
      {showAdicionarModal && (
        <div
          className="modal-overlay"
          onClick={handleCloseAdicionarModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-adicionar-base-title"
        >
          <div className="modal-popup biblioteca-adicionar-modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2 id="modal-adicionar-base-title">Adicionar à base</h2>
              <button type="button" className="modal-close" onClick={handleCloseAdicionarModal} aria-label="Fechar">×</button>
            </div>
            <form onSubmit={handleAdicionar} className="modal-form">
              <label className="modal-label">
                Pergunta ou conteúdo
                <input
                  type="text"
                  value={texto}
                  onChange={e => setTexto(e.target.value)}
                  placeholder="Ex: Como redefinir senha?"
                  className="modal-input"
                  autoFocus
                />
              </label>
              <label className="modal-label">
                Conteúdo detalhado
                <textarea
                  value={conteudoDetalhado}
                  onChange={e => setConteudoDetalhado(e.target.value)}
                  placeholder="Descreva a pergunta ou o conteúdo de forma detalhada..."
                  className="modal-input biblioteca-textarea-detalhado"
                  rows={4}
                />
              </label>

              <div className="biblioteca-acoes-container">
                <div className="biblioteca-copy-buttons">
                  <button type="button" className="modal-btn modal-btn-secondary biblioteca-btn-copy" onClick={() => handleCopyToClipboard(conteudoDetalhado, 'conteúdo')}>
                    📋 Copiar conteúdo detalhado
                  </button>
                  <button type="button" className="modal-btn modal-btn-secondary biblioteca-btn-copy" onClick={() => handleCopyToClipboard(descricao, 'descrição')}>
                    📋 Copiar descrição
                  </button>
                  {incluirRespostas && (
                    <button type="button" className="modal-btn modal-btn-secondary biblioteca-btn-copy" onClick={() => handleCopyToClipboard(textoRespostas, 'respostas')}>
                      📋 Copiar respostas
                    </button>
                  )}
                </div>

                <label className="biblioteca-checkbox-label">
                  <input type="checkbox" checked={incluirRespostas} onChange={e => setIncluirRespostas(e.target.checked)} />
                  <span>Incluir respostas</span>
                </label>
                {incluirRespostas && (
                  <textarea
                    value={textoRespostas}
                    onChange={e => setTextoRespostas(e.target.value)}
                    placeholder="Texto das respostas (ex.: mensagem padrão para o atendimento)"
                    className="modal-input biblioteca-textarea-detalhado"
                    rows={3}
                  />
                )}

                <div className="biblioteca-download-section">
                  <span className="modal-label">Botões para baixar arquivos</span>
                  <input
                    ref={downloadFileInputRef}
                    type="file"
                    multiple
                    onChange={handleDownloadFileChange}
                    className="biblioteca-file-input"
                    aria-hidden="true"
                  />
                  {botoesDownload.length > 0 && (
                    <ul className="biblioteca-botoes-download-list">
                      {botoesDownload.map((b) => (
                        <li key={b.id} className="biblioteca-botao-download-item">
                          <input
                            type="text"
                            value={b.label}
                            onChange={e => setBotoesDownload(prev => prev.map(x => x.id === b.id ? { ...x, label: e.target.value } : x))}
                            placeholder="Nome do botão"
                            className="modal-input biblioteca-input-label-botao"
                          />
                          <span className="biblioteca-botao-download-filename">{b.fileName}</span>
                          <button type="button" className="biblioteca-btn-remove" onClick={() => handleRemoveBotaoDownload(b.id)} aria-label="Remover">✕</button>
                        </li>
                      ))}
                    </ul>
                  )}
                  <button type="button" className="modal-btn modal-btn-secondary biblioteca-btn-add-download" onClick={handleAddBotaoDownload}>
                    ➕ Adicionar botão de download
                  </button>
                </div>
              </div>

              <label className="modal-label">
                Descrição
                <input
                  type="text"
                  value={descricao}
                  onChange={e => setDescricao(e.target.value)}
                  placeholder="Ex: Passo a passo para redefinição de senha no sistema"
                  className="modal-input"
                />
              </label>

              <fieldset className="biblioteca-modal-fieldset">
                <legend className="modal-label">Imagens</legend>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileChange}
                  className="biblioteca-file-input"
                  aria-hidden="true"
                />
                {imagens.length > 0 && (
                  <ul className="biblioteca-imagens-list">
                    {imagens.map((img, index) => (
                      <li key={index} className="biblioteca-imagem-item">
                        <span className="biblioteca-imagem-name">{img.name}</span>
                        <button
                          type="button"
                          className="biblioteca-btn-remove"
                          onClick={() => handleRemoverImagem(index)}
                          aria-label="Remover imagem"
                        >
                          ✕
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
                <button
                  type="button"
                  className="modal-btn modal-btn-secondary biblioteca-btn-add-img"
                  onClick={handleAdicionarImagem}
                >
                  📷 Adicionar imagem
                </button>
              </fieldset>

              <div className="modal-actions">
                <button type="button" className="modal-btn modal-btn-secondary" onClick={handleCloseAdicionarModal}>
                  Cancelar
                </button>
                <button type="submit" className="modal-btn modal-btn-primary" disabled={!texto.trim()}>
                  Adicionar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default TelaBiblioteca;
