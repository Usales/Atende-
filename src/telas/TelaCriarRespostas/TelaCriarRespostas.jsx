import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TelaCriarRespostas.css';

function TelaCriarRespostas() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    tipoProblema: '',
    nomeColaborador: '',
    telefone: '',
    matricula: '',
    modelo: '',
    serial: '',
    patrimonio: '',
    comentarios: '',
    upgradeOptions: [],
    visibleFields: {
      nomeColaborador: true,
      telefone: true,
      matricula: true,
      modelo: true,
      serial: true,
      patrimonio: true,
      comentarios: true
    }
  });

  const handleFieldToggle = (fieldName) => {
    setFormData(prev => ({
      ...prev,
      visibleFields: {
        ...prev.visibleFields,
        [fieldName]: !prev.visibleFields[fieldName]
      }
    }));
  };

  const handleUpgradeOptionToggle = (option) => {
    setFormData(prev => {
      const currentOptions = prev.upgradeOptions || [];
      const isSelected = currentOptions.includes(option);
      
      return {
        ...prev,
        upgradeOptions: isSelected 
          ? currentOptions.filter(opt => opt !== option)
          : [...currentOptions, option]
      };
    });
  };

  const handleVoltar = () => {
    navigate('/respostas');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCopiarDados = async () => {
    const conteudo = generateDocumentContent();
    try {
      await navigator.clipboard.writeText(conteudo);
      alert('Conteúdo copiado para a área de transferência!');
    } catch (err) {
      console.error('Erro ao copiar:', err);
      alert('Erro ao copiar o conteúdo.');
    }
  };

  const generateDocumentContent = () => {
    const { tipoProblema, nomeColaborador, telefone, matricula, modelo, serial, patrimonio, comentarios, upgradeOptions, visibleFields } = formData;
    
    const upgradeOptionsText = upgradeOptions && upgradeOptions.length > 0 
      ? `\n\nItens do Upgrade:\n${upgradeOptions.map(option => `- ${option}`).join('\n')}`
      : '';
    
    // Helper function to generate field line only if visible
    const getFieldLine = (fieldName, value, label, placeholder) => {
      if (!visibleFields[fieldName]) return '';
      return `${label}: ${value || placeholder}`;
    };
    
    // Helper function to build sections with only visible fields
    const buildSection = (title, fields) => {
      const visibleLines = fields.filter(line => line !== '').join('\n');
      return visibleLines ? `${title}:\n${visibleLines}` : '';
    };
    
    const templates = {
      'Upgrade': () => {
        const dadosSolicitante = buildSection('Dados do Solicitante', [
          getFieldLine('nomeColaborador', nomeColaborador, 'Nome', '[Nome do Colaborador]'),
          getFieldLine('telefone', telefone, 'Telefone', '[Telefone]'),
          getFieldLine('matricula', matricula, 'Matrícula', '[Matrícula]')
        ]);
        
        const equipamentoAtual = buildSection('Equipamento Atual', [
          getFieldLine('modelo', modelo, 'Modelo', '[Modelo]'),
          getFieldLine('serial', serial, 'Serial', '[Serial]'),
          getFieldLine('patrimonio', patrimonio, 'Patrimônio', '[Patrimônio]')
        ]);
        
        const observacoes = getFieldLine('comentarios', comentarios, 'Observações', 'Sem observações adicionais.');
        
        let content = 'SOLICITAÇÃO DE UPGRADE';
        if (dadosSolicitante) content += `\n\n${dadosSolicitante}`;
        if (equipamentoAtual) content += `\n\n${equipamentoAtual}`;
        content += `\n\nBom dia, prezados.\nDiante da situação a qual o equipamento se encontra e os problemas que o colaborador vem enfrentando, optei por realizar o Upgrade do mesmo.${upgradeOptionsText}`;
        if (observacoes) content += `\n\n${observacoes}`;
        content += `\n\nData: ${new Date().toLocaleDateString('pt-BR')}`;
        
        return content;
      },
      
      'Falta de retorno': () => {
        const dadosUsuario = buildSection('Dados do Usuário', [
          getFieldLine('nomeColaborador', nomeColaborador, 'Nome', '[Nome do Colaborador]'),
          getFieldLine('telefone', telefone, 'Telefone', '[Telefone]'),
          getFieldLine('matricula', matricula, 'Matrícula', '[Matrícula]')
        ]);
        
        const equipamento = buildSection('Equipamento', [
          getFieldLine('modelo', modelo, 'Modelo', '[Modelo]'),
          getFieldLine('serial', serial, 'Serial', '[Serial]'),
          getFieldLine('patrimonio', patrimonio, 'Patrimônio', '[Patrimônio]')
        ]);
        
        const observacoes = getFieldLine('comentarios', comentarios, 'Observações', 'Sem observações adicionais.');
        
        let content = 'REGISTRO DE FALTA DE RETORNO';
        if (dadosUsuario) content += `\n\n${dadosUsuario}`;
        if (equipamento) content += `\n\n${equipamento}`;
        content += `\n\nSituação:\nUsuário não retornou contato conforme solicitado.\nTentativas de contato realizadas sem sucesso.`;
        if (observacoes) content += `\n\n${observacoes}`;
        content += `\n\nStatus: Aguardando retorno\nData: ${new Date().toLocaleDateString('pt-BR')}`;
        
        return content;
      },
      
      'Encerramento': () => {
        const dadosUsuario = buildSection('Dados do Usuário', [
          getFieldLine('nomeColaborador', nomeColaborador, 'Nome', '[Nome do Colaborador]'),
          getFieldLine('telefone', telefone, 'Telefone', '[Telefone]'),
          getFieldLine('matricula', matricula, 'Matrícula', '[Matrícula]')
        ]);
        
        const equipamento = buildSection('Equipamento', [
          getFieldLine('modelo', modelo, 'Modelo', '[Modelo]'),
          getFieldLine('serial', serial, 'Serial', '[Serial]'),
          getFieldLine('patrimonio', patrimonio, 'Patrimônio', '[Patrimônio]')
        ]);
        
        const observacoes = getFieldLine('comentarios', comentarios, 'Observações', 'Sem observações adicionais.');
        
        let content = 'ENCERRAMENTO DE CHAMADO';
        if (dadosUsuario) content += `\n\n${dadosUsuario}`;
        if (equipamento) content += `\n\n${equipamento}`;
        content += `\n\nResolução:\nChamado encerrado com sucesso.\nProblema solucionado conforme procedimentos técnicos.`;
        if (observacoes) content += `\n\n${observacoes}`;
        content += `\n\nStatus: Encerrado\nData: ${new Date().toLocaleDateString('pt-BR')}`;
        
        return content;
      },
      
      'Outros': () => {
        const dadosUsuario = buildSection('Dados do Usuário', [
          getFieldLine('nomeColaborador', nomeColaborador, 'Nome', '[Nome do Colaborador]'),
          getFieldLine('telefone', telefone, 'Telefone', '[Telefone]'),
          getFieldLine('matricula', matricula, 'Matrícula', '[Matrícula]')
        ]);
        
        const equipamento = buildSection('Equipamento', [
          getFieldLine('modelo', modelo, 'Modelo', '[Modelo]'),
          getFieldLine('serial', serial, 'Serial', '[Serial]'),
          getFieldLine('patrimonio', patrimonio, 'Patrimônio', '[Patrimônio]')
        ]);
        
        const observacoes = getFieldLine('comentarios', comentarios, 'Observações', 'Sem observações adicionais.');
        
        let content = 'REGISTRO DE ATENDIMENTO';
        if (dadosUsuario) content += `\n\n${dadosUsuario}`;
        if (equipamento) content += `\n\n${equipamento}`;
        content += `\n\nDescrição:\nAtendimento técnico realizado conforme necessidade.`;
        if (observacoes) content += `\n\n${observacoes}`;
        content += `\n\nData: ${new Date().toLocaleDateString('pt-BR')}`;
        
        return content;
      }
    };
    
    return templates[tipoProblema] ? templates[tipoProblema]() : 'Selecione um tipo de problema para gerar o conteúdo.';
  };

  return (
    <div className="tela-criar-respostas">
      {/* Back Button */}
      <button className="back-button" onClick={handleVoltar}>
        ← Voltar para Respostas
      </button>

      {/* Header */}
      <div className="criar-header">
        <div className="header-title">
          <span className="plus-icon">✚</span>
          <h1 className="page-title">Criar Resposta</h1>
        </div>
      </div>

      {/* Form Section */}
      <div className={`main-content ${formData.tipoProblema ? 'split-layout' : 'centered-layout'}`}>
        <div className="form-container">
          <div className="form-grid">
            {/* Single Column */}
            <div className="form-column">
              <div className="input-group">
                <select
                  name="tipoProblema"
                  value={formData.tipoProblema}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="">Selecione o tipo de problema</option>
                  <option value="Upgrade">Upgrade</option>
                  <option value="Falta de retorno">Falta de retorno</option>
                  <option value="Encerramento">Encerramento</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>
              
              {/* Upgrade Options - Only show when Upgrade is selected */}
              {formData.tipoProblema === 'Upgrade' && (
                <div className="upgrade-options">
                  <h3 className="upgrade-title">Opções de Upgrade:</h3>
                  <div className="upgrade-buttons">
                    <div className="upgrade-option">
                      <input
                        type="checkbox"
                        id="memoria-toggle"
                        checked={formData.upgradeOptions?.includes('Adicionar Memória') || false}
                        onChange={() => handleUpgradeOptionToggle('Adicionar Memória')}
                        className="upgrade-toggle"
                      />
                      <button
                        type="button"
                        onClick={() => handleUpgradeOptionToggle('Adicionar Memória')}
                        className={`upgrade-button ${formData.upgradeOptions?.includes('Adicionar Memória') ? 'selected' : ''}`}
                      >
                        💾 Adicionar Memória
                      </button>
                    </div>
                    
                    <div className="upgrade-option">
                      <input
                        type="checkbox"
                        id="ssd-toggle"
                        checked={formData.upgradeOptions?.includes('Adicionar SSD') || false}
                        onChange={() => handleUpgradeOptionToggle('Adicionar SSD')}
                        className="upgrade-toggle"
                      />
                      <button
                        type="button"
                        onClick={() => handleUpgradeOptionToggle('Adicionar SSD')}
                        className={`upgrade-button ${formData.upgradeOptions?.includes('Adicionar SSD') ? 'selected' : ''}`}
                      >
                        💿 Adicionar SSD
                      </button>
                    </div>
                    
                    <div className="upgrade-option">
                      <input
                        type="checkbox"
                        id="formatacao-toggle"
                        checked={formData.upgradeOptions?.includes('Formatação Limpa') || false}
                        onChange={() => handleUpgradeOptionToggle('Formatação Limpa')}
                        className="upgrade-toggle"
                      />
                      <button
                        type="button"
                        onClick={() => handleUpgradeOptionToggle('Formatação Limpa')}
                        className={`upgrade-button ${formData.upgradeOptions?.includes('Formatação Limpa') ? 'selected' : ''}`}
                      >
                        🧩 Formatação Limpa
                      </button>
                    </div>
                  </div>
                </div>
              )}
              
              {formData.tipoProblema && (
                <>
                  <div className="field-group">
                    <input
                      type="checkbox"
                      id="nome-toggle"
                      checked={formData.visibleFields.nomeColaborador}
                      onChange={() => handleFieldToggle('nomeColaborador')}
                      className="field-toggle"
                    />
                    <div className="input-group">
                      <input
                        type="text"
                        name="nomeColaborador"
                        placeholder="Nome do colaborador"
                        value={formData.nomeColaborador}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    </div>
                  </div>
                  
                  <div className="field-group">
                    <input
                      type="checkbox"
                      id="telefone-toggle"
                      checked={formData.visibleFields.telefone}
                      onChange={() => handleFieldToggle('telefone')}
                      className="field-toggle"
                    />
                    <div className="input-group">
                      <input
                        type="tel"
                        name="telefone"
                        placeholder="Telefone"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    </div>
                  </div>
                  
                  <div className="field-group">
                    <input
                      type="checkbox"
                      id="matricula-toggle"
                      checked={formData.visibleFields.matricula}
                      onChange={() => handleFieldToggle('matricula')}
                      className="field-toggle"
                    />
                    <div className="input-group">
                      <input
                        type="text"
                        name="matricula"
                        placeholder="Matrícula"
                        value={formData.matricula}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    </div>
                  </div>
                  
                  <div className="field-group">
                    <input
                      type="checkbox"
                      id="modelo-toggle"
                      checked={formData.visibleFields.modelo}
                      onChange={() => handleFieldToggle('modelo')}
                      className="field-toggle"
                    />
                    <div className="input-group">
                      <input
                        type="text"
                        name="modelo"
                        placeholder="Modelo"
                        value={formData.modelo}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    </div>
                  </div>
                  
                  <div className="field-group">
                    <input
                      type="checkbox"
                      id="serial-toggle"
                      checked={formData.visibleFields.serial}
                      onChange={() => handleFieldToggle('serial')}
                      className="field-toggle"
                    />
                    <div className="input-group">
                      <input
                        type="text"
                        name="serial"
                        placeholder="Serial"
                        value={formData.serial}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    </div>
                  </div>
                  
                  <div className="field-group">
                    <input
                      type="checkbox"
                      id="patrimonio-toggle"
                      checked={formData.visibleFields.patrimonio}
                      onChange={() => handleFieldToggle('patrimonio')}
                      className="field-toggle"
                    />
                    <div className="input-group">
                      <input
                        type="text"
                        name="patrimonio"
                        placeholder="Patrimônio"
                        value={formData.patrimonio}
                        onChange={handleInputChange}
                        className="form-input"
                      />
                    </div>
                  </div>
                  
                  <div className="field-group">
                    <input
                      type="checkbox"
                      id="comentarios-toggle"
                      checked={formData.visibleFields.comentarios}
                      onChange={() => handleFieldToggle('comentarios')}
                      className="field-toggle"
                    />
                    <div className="input-group">
                      <textarea
                        name="comentarios"
                        placeholder="Comentários adicionais"
                        value={formData.comentarios}
                        onChange={handleInputChange}
                        className="form-textarea"
                        rows="3"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        
        {/* A4 Document Section */}
        {formData.tipoProblema && (
          <div className="document-container">
            <div className="document-paper">
              <div className="document-content">
                <pre className="document-text">{generateDocumentContent()}</pre>
              </div>
            </div>
            <button onClick={handleCopiarDados} className="copy-button">
              📋 
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default TelaCriarRespostas;